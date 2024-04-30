<script>
	import { ModeWatcher } from "mode-watcher";
    import "../app.pcss";
    import Icon from '@iconify/svelte';
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/";
	import Darkmode from "@/components/ui/darkmode/darkmode.svelte";
</script>
<Darkmode/>
<slot></slot>
