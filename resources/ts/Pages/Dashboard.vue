<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2-component> Dashboards </h2-component>
        </template>

        <div class="py-12">
            <div
                class="max-w-7xl mx-auto sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8"
            >
                <tile-component class="md:col-span-2">
                   <h1-component>Hello world</h1-component>
                </tile-component>
            </div>
        </div>
    </app-layout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import TileComponent from "@/components/dashboard/Tile.vue";

</script>
