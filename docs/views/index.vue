<template>
<div>
    <u-navbar :class="$style.navbar" alignment="center" :router="false">
        <u-navbar-item>Home</u-navbar-item>
        <u-navbar-item>Guides</u-navbar-item>
        <u-navbar-item>Features</u-navbar-item>
        <u-navbar-item>Downloads</u-navbar-item>
        <u-navbar-item>About</u-navbar-item>
    </u-navbar>
    <u-navbar-1 :class="$style.navbar" alignment="center" :router="false" style="background: #eaeef5;">
        <u-navbar-1-item>Home</u-navbar-1-item>
        <u-navbar-1-item>Guides</u-navbar-1-item>
        <u-navbar-1-item>Features</u-navbar-1-item>
        <u-navbar-1-item>Downloads</u-navbar-1-item>
        <u-navbar-1-item>About</u-navbar-1-item>
    </u-navbar-1>
    <u-navbar-2 :class="$style.navbar" alignment="center" :router="false">
        <u-navbar-2-item>Home</u-navbar-2-item>
        <u-navbar-2-item>Guides</u-navbar-2-item>
        <u-navbar-2-item>Features</u-navbar-2-item>
        <u-navbar-2-item>Downloads</u-navbar-2-item>
        <u-navbar-2-item>About</u-navbar-2-item>
    </u-navbar-2>
    <u-navbar-3 :class="$style.navbar" alignment="center" :router="false" style="background: #eaeef5;">
        <u-navbar-3-item>Home</u-navbar-3-item>
        <u-navbar-3-item>Guides</u-navbar-3-item>
        <u-navbar-3-item>Features</u-navbar-3-item>
        <u-navbar-3-item>Downloads</u-navbar-3-item>
        <u-navbar-3-item>About</u-navbar-3-item>
    </u-navbar-3>
</div>
</template>

<style module>
.navbar[class] {
    padding: 50px 0;
    height: auto;
}
</style>
