/**
 * created by Administrator on 2019-5-16
 */
/**
 * created by LiuLu on 2019-3-12
 */
(function () {

    'use strict';

    angular.module('com.jsft.cm.dispatch')
        .component('jfSelectClusterGateway', {
            bindings: {
                groupId: '='
            },
            controller: jfSelectClusterGateway,
            controllerAs: 'scgCtrl',
            templateUrl: 'app/dispatchV2/sidebar/contact/select-cluster-gateway.html'
        });

    jfSelectClusterGateway.$inject = ['NgTableParams', 'DispatchService', '$scope', 'jfNotify', 'MESSAGE'];

    function jfSelectClusterGateway(NgTableParams, DispatchService, $scope, jfNotify, MESSAGE) {
        var vm = this,
            copyId = null,//当前选中的车载电台id
            currentChecked = false,//是否选中
            dispatchCenterId = DispatchService.dispatchCenterId,
            carRadioPttData = null; //已加入到集群网关的车载电台数据

        vm.pageDataList = []; //table数据

        vm.openCarRadioList = openCarRadioList;
        vm.onRadioRowChecked = onRadioRowChecked;

        activate();

        function activate() {
            vm.tableParams = getTableParams();
            getCarRadioPttData();
        }

        function getTableParams() {
            var params = {
                getData: getClusterData
            };
            return new NgTableParams({}, params);
        }

        function getCarRadioPttData() {
            return DispatchService.getClusterGatewayInPtt(vm.groupId).then(function (data) {
                if (data.length > 0) {
                    carRadioPttData = data;
                    // copyId = data[0].id;
                }
            });
        }


        /**
         * 获取调度台绑定的集群网关
         * @param params
         * @returns {*}
         */
        function getClusterData(params) {
            var size = params.count();
            return DispatchService.getDispatchClusterList(dispatchCenterId, size).then(function (data) {
                vm.pageDataList = data;
                params.total(data.length);
                angular.forEach(vm.pageDataList, function (item) {
                    item.carRadioOpening = false;
                });

                if (!carRadioPttData) {
                    openCarRadioList(data[0].id);
                }
                return vm.pageDataList;
            });
        }

        /**
         * 获取集群网关下的车载电台列表
         * @param radioId 集群网关id
         * @returns {*}
         */
        function openCarRadioList(radioId) {
            return DispatchService.getDispatchCarRadioList(radioId).then(function (data) {
                var radioTitle = [
                    {
                        title: true,
                        name: '车载电台名称',
                        sipAccount: 'SIP注册账号',
                        status: 'Head'
                    }
                ];
                data = radioTitle.concat(data);
                angular.forEach(vm.pageDataList, function (clus, index) {
                    if (radioId === clus.id) {
                        clus.carRadioOpening = !clus.carRadioOpening;
                        clus.childList = data;
                    }

                    angular.forEach(clus.childList, function (item) {
                        // if (copyId && currentChecked) {
                        //     if (copyId !== item.id) {
                        //         item.disabled = true;
                        //     }
                        // }

                        if (item.status !== 'Free') {
                            item.disabled = true;
                        }

                        if (carRadioPttData) {
                            if (item.id !== carRadioPttData.id) {
                                item.disabled = true;
                                item.checked = false;
                            } else {
                                item.checked = true;
                                item.disabled = false;

                            }
                        }
                    });
                });
            });
        }


        function getCheckIds() {
            var ids = [];
            angular.forEach(vm.pageDataList, function (clus) {
                angular.forEach(clus.childList, function (radio) {
                    if (radio.checked) {
                        ids.push(radio.id);
                    }
                });
            });

            return ids;
        }

        /**
         * 选择要绑定的车载电台
         * @param item
         */
        function onRadioRowChecked() {
            // angular.forEach(vm.pageDataList, function (clus) {
            //
            //     angular.forEach(clus.childList, function (radio) {
            //         if (item.checked) {
            //             copyId = item.id;
            //             currentChecked = true;
            //             if (!radio.checked) {
            //                 radio.disabled = true;
            //             }
            //
            //             item.clusterGateway.id === clus.id ? clus.selectedTip = true : clus.selectedTip = false;
            //
            //         } else if (copyId === item.id && radio.status === 'Free') {
            //             radio.disabled = false;
            //             clus.selectedTip = false;
            //             currentChecked = false;
            //         }
            //     });
            // });
        }

        function clusterAddPTT(groupId, $uibModalInstance) {
            // var vehicleStationIds = [copyId];
            var vehicleStationIds = getCheckIds();
            if (vehicleStationIds.length > 0) {
                DispatchService.addCarRadioToPtt(groupId, vehicleStationIds).then(function () {
                    jfNotify.success(MESSAGE.CLUSTER_ADD_PTT_SUCCESS);
                    $scope.publish('CLUSTER_GATEWAY_ADDED_PTT');
                });
            } else {
                jfNotify.warning(MESSAGE.LEAST_SELECT_ONE);
                return
            }

            $uibModalInstance.close();
        }

        $scope.subscribe('CLUSTER_GATEWAY_ADD', clusterAddPTT);


    }
})();