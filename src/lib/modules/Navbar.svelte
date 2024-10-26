<script lang="ts">
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import {
    GraduationCapIcon,
    LogOutIcon,
    SettingsIcon,
    NotebookTextIcon,
    MessageSquareIcon,
    ChartPieIcon,
    LogInIcon,
    GitPullRequestIcon,
  } from 'lucide-svelte/icons';
  import DropdownMenuShortcut from '$lib/components/ui/dropdown-menu/dropdown-menu-shortcut.svelte';

  const authedUser = 'Robert Tolstov'; // TODO: Replace with actual authentication logic
  // const authedUser = null;
</script>

<ModeWatcher />
<nav
  class="sticky top-0 flex flex-row items-center justify-between border-b-2 border-gray-300 bg-white px-8 py-4 dark:border-gray-900 dark:bg-black lg:px-12">
  <a
    href="/"
    class="flex flex-row items-center gap-1 text-2xl font-bold">
    <GitPullRequestIcon strokeWidth="3" />
    MergeMinds
  </a>

  <div class="flex flex-row items-center gap-1">
    {#if authedUser}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          asChild
          let:builder>
          <Button
            builders={[builder]}
            variant="outline"
            class="w-min gap-2 p-2 text-lg lg:p-4">
            <GraduationCapIcon />
            <span class="line-clamp-1 hidden max-w-48 truncate lg:flex">{authedUser}</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="end"
          class="w-56">
          <DropdownMenu.Group>
            <a href="/profile">
              <DropdownMenu.Item class="gap-2">
                <SettingsIcon size="16" />
                Профиль
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenu.Item>
            </a>
            <a href="/profile/courses">
              <DropdownMenu.Item class="gap-2">
                <NotebookTextIcon size="16" />
                Мои курсы
                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
              </DropdownMenu.Item>
            </a>
            <a href="/profile/courses">
              <DropdownMenu.Item class="gap-2">
                <MessageSquareIcon size="16" />
                Чат
                <DropdownMenuShortcut>⌘M</DropdownMenuShortcut>
              </DropdownMenu.Item>
            </a>
            <a href="/profile/statistics">
              <DropdownMenu.Item class="gap-2">
                <ChartPieIcon size="16" />
                Статистика
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenu.Item>
            </a>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <a href="/logout">
              <DropdownMenu.Item class="gap-2">
                <LogOutIcon size="16" />
                Выход
              </DropdownMenu.Item>
            </a>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {:else}
      <a href="/login">
        <Button
          variant="outline"
          class="w-min gap-2 p-2 text-lg lg:p-4">
          <LogInIcon size="16" />
          Вход
        </Button>
      </a>
    {/if}
    <ThemeSwitch />
  </div>
</nav>
