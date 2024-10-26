<script>
  // Здесь можно добавить логику для получения данных о курсе
  let course = {
    title: 'Основы программирования',
    description: 'Этот курс познакомит вас с основами программирования на Python.',
    modules: [
      { title: 'Модуль 1: Введение', lessons: ['Урок 1.1', 'Урок 1.2'] },
      { title: 'Модуль 2: Условные конструкции', lessons: ['Урок 2.1', 'Урок 2.2'] },
      { title: 'Модуль 3: Циклы', lessons: ['Урок 3.1', 'Урок 3.2'] },
    ],
  };
</script>

<main class="container mx-auto p-6">
  <h1 class="mb-4 text-4xl font-bold">{course.title}</h1>

  <p class="mb-6 text-gray-700">{course.description}</p>

  <h2 class="mb-2 text-2xl font-semibold">Модули</h2>

  <div class="space-y-4">
    {#each course.modules as module}
      <div class="rounded-lg border p-4 shadow">
        <h3 class="text-xl font-bold">{module.title}</h3>
        <ul class="mt-2 list-disc pl-5">
          {#each module.lessons as lesson}
            <li>{lesson}</li>
          {/each}
        </ul>
        <button class="mt-4 rounded bg-blue-500 px-4 py-2 text-white">Перейти к модулю</button>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    background-color: #f9fafb; /* Светлый фон */
  }
</style>
