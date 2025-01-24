<script
  lang="ts"
  context="module">
  export interface CourseCardProps {
    id: number;
    icon: ComponentType<Icon>;
    title: string;
    teachers: { id: number; lastname: string; firstname?: string; patronymic?: string }[];
  }
</script>

<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import type { ComponentType } from 'svelte';
  import type { Icon } from 'lucide-svelte';

  export let course: CourseCardProps;
</script>

<a href={`/courses/${course.id}`}>
  <Card.Root
    class="group relative flex min-h-40 flex-col justify-between overflow-hidden transition-all hover:bg-accent">
    <div class="absolute -right-10 z-0 opacity-5 transition-all group-hover:-rotate-[15deg]">
      <svelte:component
        this={course.icon}
        class="h-[150%]"
        size="128" />
    </div>
    <Card.Header>
      <Card.Title class="line-clamp-2 text-2xl leading-tight">
        <span class="max-w-[75%]">{course.title}</span>
      </Card.Title>
    </Card.Header>
    <Card.Footer class="flex flex-wrap gap-2">
      {#each course.teachers as teacher, index}
        <Button
          href={`/users/${teacher.id}`}
          variant="link"
          size="sm"
          class="-my-1 h-auto p-0 text-sm text-zinc-500">
          {teacher.lastname}
          {teacher.firstname ? teacher.firstname[0] + '.' : ''}
          {teacher.firstname && teacher.patronymic ? teacher.patronymic[0] + '.' : ''}
          {index + 1 !== course.teachers.length ? ',' : ''}
        </Button>
      {/each}
    </Card.Footer>
  </Card.Root>
</a>
