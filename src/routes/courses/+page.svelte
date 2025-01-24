<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import * as Pagination from '$lib/components/ui/pagination';
  import CourseCard, { type CourseCardProps } from '$lib/modules/CourseCard.svelte';
  import Searchbar from '$lib/modules/Searchbar.svelte';
  import {
    SquareTerminalIcon,
    DatabaseIcon,
    ShapesIcon,
    CpuIcon,
    SchoolIcon,
    RotateCcwIcon,
    StampIcon,
    HouseIcon,
    GraduationCapIcon,
  } from 'lucide-svelte';

  const coursesMocks: CourseCardProps[] = [
    {
      id: 1,
      icon: StampIcon,
      title: 'Деканат',
      teachers: [
        {
          id: 7,
          lastname: 'Миронов',
          firstname: 'Сергей',
          patronymic: 'Владимирович',
        },
        {
          id: 7,
          lastname: 'Сафрончик',
          firstname: 'Мария',
          patronymic: 'Ильинишна',
        },
        {
          id: 7,
          lastname: 'Кудрина',
          firstname: 'Елена',
          patronymic: 'Вячеславовна',
        },
        {
          id: 7,
          lastname: 'Иванова',
          firstname: 'Анна',
          patronymic: 'Сергеевна',
        },
        {
          id: 7,
          lastname: 'Булавина',
          firstname: 'Екатерина',
          patronymic: 'Викторовна',
        },
        {
          id: 7,
          lastname: 'Букушева',
          firstname: 'Алия',
          patronymic: 'Владимировна',
        },
      ],
    },
    {
      id: 2,
      icon: HouseIcon,
      title: 'Заочная форма обучения',
      teachers: [
        {
          id: 7,
          lastname: 'Миронов',
          firstname: 'Сергей',
          patronymic: 'Владимирович',
        },
        {
          id: 7,
          lastname: 'Говорова',
          firstname: 'Ксения',
          patronymic: '',
        },
        {
          id: 7,
          lastname: 'Сафрончик',
          firstname: 'Мария',
          patronymic: 'Ильинишна',
        },
        {
          id: 7,
          lastname: 'Булавина',
          firstname: 'Екатерина',
          patronymic: 'Викторовна',
        },
      ],
    },
    {
      id: 3,
      icon: GraduationCapIcon,
      title: 'Курсовые и выпускные работы МОАИС МОАИС МОАИС МОАИС МОАИС',
      teachers: [
        {
          id: 7,
          lastname: 'Булавина',
          firstname: 'Екатерина',
          patronymic: 'Викторовна',
        },
        {
          id: 7,
          lastname: 'Казачкова',
          firstname: 'Анна',
          patronymic: 'Андреевна',
        },
        {
          id: 7,
          lastname: 'Кудрина',
          firstname: 'Елена',
          patronymic: 'Вячеславовна',
        },
        {
          id: 7,
          lastname: 'Лапшева',
          firstname: 'Елена',
          patronymic: '',
        },
        {
          id: 7,
          lastname: 'Огнёва',
          firstname: 'Марина',
          patronymic: 'Валентиновна',
        },
      ],
    },
    {
      id: 4,
      icon: SquareTerminalIcon,
      title: 'СИТ 2025',
      teachers: [
        {
          id: 1,
          lastname: 'Рыданов',
          firstname: 'Никита',
          patronymic: 'Сергеевич',
        },
        {
          id: 2,
          lastname: 'Чернигин',
          firstname: 'Михаил',
          patronymic: 'Андреевич',
        },
        {
          id: 3,
          lastname: 'Гущин',
          firstname: 'Андрей',
        },
      ],
    },
    {
      id: 5,
      icon: ShapesIcon,
      title: 'Структуры данных и алгоритмы',
      teachers: [
        {
          id: 4,
          lastname: 'Батраева',
          firstname: 'Инна',
          patronymic: 'Александровна',
        },
        {
          id: 5,
          lastname: 'Векслер',
          firstname: 'Виталий',
          patronymic: 'Абрамович',
        },
      ],
    },
    {
      id: 6,
      icon: CpuIcon,
      title: 'Операционные системы',
      teachers: [
        {
          id: 6,
          lastname: 'Соловьёв',
          firstname: 'Владимир',
          patronymic: 'Михайлович',
        },
      ],
    },
    {
      id: 7,
      icon: DatabaseIcon,
      title: 'Системы управления базами данных',
      teachers: [
        {
          id: 4,
          lastname: 'Батраева',
          firstname: 'Инна',
          patronymic: 'Александровна',
        },
      ],
    },
    {
      id: 8,
      icon: SchoolIcon,
      title: 'Введение в специальность',
      teachers: [
        {
          id: 7,
          lastname: 'Кудрина',
          firstname: 'Елена',
          patronymic: 'Вячеславовна',
        },
      ],
    },
  ];

  let courses: CourseCardProps[] = [];
  let loading = true;
  let error: string | null = null;
  let filter: string = '';

  const fetchCourses = async (): Promise<void> => {
    error = null;
    loading = true;
    courses = [];
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        loading = false;
        coursesMocks.forEach((element) => {
          if (!filter || (filter && element.title.toLowerCase().includes(filter.toLowerCase()))) {
            courses.push(element);
          }
        });
        resolve();
      }, 1000),
    );
  };

  fetchCourses();
</script>

<header class="mt-6 grid grid-cols-1 grid-rows-2 gap-8 lg:grid-cols-2 lg:grid-rows-1">
  <h1 class="text-5xl font-bold">Курсы</h1>
  <Searchbar
    bind:filter
    handleSubmit={fetchCourses} />
</header>

<div class="my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#if loading}
    <Skeleton class="min-h-40" />
    <Skeleton class="min-h-40" />
    <Skeleton class="min-h-40" />
    <Skeleton class="min-h-40" />
    <Skeleton class="min-h-40" />
    <Skeleton class="min-h-40" />
  {:else if error}
    <div class="flex flex-row items-center gap-4">
      <span class="text-lg text-destructive">
        Не удалось загрузить курсы: {error}
      </span>
      <Button
        size="icon"
        variant="ghost"
        on:click={fetchCourses}>
        <RotateCcwIcon />
      </Button>
    </div>
  {:else}
    {#each courses as course}
      <CourseCard {course} />
    {:else}
      <div>Курсы не найдены. Попробуйте убрать фильтры</div>
    {/each}
  {/if}
</div>

<!-- WARN: It's completely not working, it's just a mock. Nearly impossible to demonstrate proper work without real data -->
<Pagination.Root
  count={courses.length}
  perPage={8}
  let:pages
  let:currentPage>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton />
    </Pagination.Item>
    {#each pages as page (page.key)}
      {#if page.type === 'ellipsis'}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <Pagination.Link
            {page}
            isActive={currentPage == page.value}>
            {page.value}
          </Pagination.Link>
        </Pagination.Item>
      {/if}
    {/each}
    <Pagination.Item>
      <Pagination.NextButton />
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
