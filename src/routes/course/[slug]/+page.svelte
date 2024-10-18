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
  <h1 class="text-4xl font-bold mb-4">{course.title}</h1>

  <p class="mb-6 text-gray-700">{course.description}</p>

  <h2 class="text-2xl font-semibold mb-2">Модули</h2>

  <div class="space-y-4">
    {#each course.modules as module}
      <div class="p-4 border rounded-lg shadow">
        <h3 class="text-xl font-bold">{module.title}</h3>
        <ul class="list-disc pl-5 mt-2">
          {#each module.lessons as lesson}
            <li>{lesson}</li>
          {/each}
        </ul>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Перейти к модулю</button>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    background-color: #f9fafb; /* Светлый фон */
  }
</style>
