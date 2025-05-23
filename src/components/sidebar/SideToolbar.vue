<template>
  <teleport :to="teleportTarget">
    <nav class="side-tool-bar-container" :class="{ 'small-sidebar': isSmall }">
      <SidebarIcon
        v-for="tab in tabs"
        :key="tab.id"
        :icon="tab.icon"
        :icon-badge="tab.iconBadge"
        :tooltip="tab.tooltip + getTabTooltipSuffix(tab)"
        :selected="tab.id === selectedTab?.id"
        :class="tab.id + '-tab-button'"
        @click="onTabClick(tab)"
      />
      <div class="side-tool-bar-end">
        <SidebarLogoutIcon v-if="userStore.isMultiUserServer" />
        <SidebarSettingsToggleIcon />
      </div>
    </nav>
  </teleport>
  <div
    v-if="selectedTab"
    class="sidebar-content-container h-full overflow-y-auto overflow-x-hidden"
  >
    <ExtensionSlot :extension="selectedTab" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import ExtensionSlot from '@/components/common/ExtensionSlot.vue'
import { useKeybindingStore } from '@/stores/keybindingStore'
import { useSettingStore } from '@/stores/settingStore'
import { useUserStore } from '@/stores/userStore'
import { useWorkspaceStore } from '@/stores/workspaceStore'
import type { SidebarTabExtension } from '@/types/extensionTypes'

import SidebarIcon from './SidebarIcon.vue'
import SidebarLogoutIcon from './SidebarLogoutIcon.vue'
import SidebarSettingsToggleIcon from './SidebarSettingsToggleIcon.vue'

const workspaceStore = useWorkspaceStore()
const settingStore = useSettingStore()
const userStore = useUserStore()

const teleportTarget = computed(() =>
  settingStore.get('Comfy.Sidebar.Location') === 'left'
    ? '.comfyui-body-left'
    : '.comfyui-body-right'
)

const isSmall = computed(
  () => settingStore.get('Comfy.Sidebar.Size') === 'small'
)

const tabs = computed(() => workspaceStore.getSidebarTabs())
const selectedTab = computed(() => workspaceStore.sidebarTab.activeSidebarTab)

const onTabClick = (item: SidebarTabExtension) => {
  workspaceStore.sidebarTab.toggleSidebarTab(item.id)
}
const keybindingStore = useKeybindingStore()
const getTabTooltipSuffix = (tab: SidebarTabExtension) => {
  const keybinding = keybindingStore.getKeybindingByCommandId(
    `Workspace.ToggleSidebarTab.${tab.id}`
  )
  return keybinding ? ` (${keybinding.combo.toString()})` : ''
}
</script>

<style scoped>
.side-tool-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--sidebar-width);
  height: 100%;

  background-color: var(--comfy-menu-secondary-bg);
  color: var(--fg-color);
  box-shadow: var(--bar-shadow);

  --sidebar-width: 4rem;
  --sidebar-icon-size: 1.5rem;

  /* Add a subtle shadow to separate sidebar from content */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.dark-theme .side-tool-bar-container {
  background-color: #000000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
}

.side-tool-bar-container.small-sidebar {
  --sidebar-width: 2.5rem;
  --sidebar-icon-size: 1rem;
}

.side-tool-bar-end {
  align-self: flex-end;
  margin-top: auto;
}
</style>
