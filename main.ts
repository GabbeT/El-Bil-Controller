devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    minibit.go(mbDirection.Reverse, 100)
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    minibit.rotate(mbRobotDirection.Right, 25)
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    minibit.rotate(mbRobotDirection.Left, 25)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    minibit.go(mbDirection.Forward, 100)
})
