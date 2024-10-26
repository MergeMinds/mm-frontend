<script>
  import Navbar from '$lib/modules/Navbar.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Navbar />
<slot />
