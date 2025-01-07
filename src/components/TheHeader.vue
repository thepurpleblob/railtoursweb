<template>
    <header class="bg-[#6b0319] text-white py-4">
        <img class="mx-auto" src="@/assets/RtTransparentSmall.png" alt="SRPS Railtours Logo" />

        <div class="navbar">
            <div class="navbar-start lg:hidden">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li v-for="item in menu">
                            <RouterLink activeClass="active" :to="item.path">{{ item.name }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="item in menu">
                        <RouterLink activeClass="active" :to="item.path">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref([
    {path: '/', name: 'Home'},
    {path: '/tours', name: 'Tours'},
    {path: '/page/terms', name: 'Terms & Conditions'}
]);
</script>

<style>
.active{
    @apply underline;
}
</style>