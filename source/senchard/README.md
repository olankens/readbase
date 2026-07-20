<div align="center">
  <p><img src=".assets/icon.avif" align="center" width="112"></p>
  <h1>SENCHARD</h1>
</div>

<table>
  <tbody><tr><td align="center" width="99999"><div>
    <a href="#">WEBSITE</a> ·
    <a href="#">REGISTRY</a> ·
    <a href="#">FUNDING</a>
  </div></td></tr></tbody>
  <tbody><tr><td align="center" width="99999">&nbsp;<div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper turpis ipsum, at vulputate lacus congue pulvinar. In et convallis nunc, eget tempor orci. Nullam et viverra eros. In scelerisque aenean.
  </div>&nbsp;</td></tr></tbody>
</table>

## PREVIEWS

<table><tbody><tr><td width="99999">
  <img src=".assets/preview-01.avif" align="center" width="99999">
</td></tr></tbody></table>

## LEARNING

### ADD PACKAGE

```sh
flutter pub add senchard --git-url https://github.com/olankens/senchard
```

### CREATE CLIENT

```dart
var client = Client('television_ip_address_here', foolish: true);
```

### UPDATE PICTURE MODE

```dart
await client
  ..attach()
  ..changePictureMode(PictureMode.cinemaNight)
  ..revertPictureMode()
  ..changeApplyPicture(ApplyPicture.all)
  ..changeLocalDimming(LocalDimming.off)
  ..changeBacklight(40)
  ..changeBrightness(50)
  ..changeContrast(70)
  ..changeColorSaturation(50)
  ..changeSharpness(5)
  ..changeAdaptiveContrast(AdaptiveContrast.off)
  ..changeUltraSmoothMotion(UltraSmoothMotion.off)
  ..changeNoiseReduction(NoiseReduction.off)
  ..changeColorTemperature(ColorTemperature.warm1)
  ..changeColorGamut(ColorGamut.native)
  ..changeGammaAdjustment(GammaAdjustment.gamma22)
  ..toggleViewingAngle()
  ..detach();
```