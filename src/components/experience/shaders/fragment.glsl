#include "./includes/simplexNoise4d.glsl"
#include "./includes/perlinNoise3d.glsl"

uniform vec3 colorA;
uniform vec3 colorB;
uniform float uTime;
varying vec2 vUv;
void main() {
    // Use fragment coordinates and time to generate more variation
    float strength = cnoise(vec4(vUv * 23.0, 0.3, uTime));

    vec3 finalColor = mix(colorA, colorB, strength*1.8);

    gl_FragColor = vec4(vec3(finalColor), 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
