<script lang="ts">
    import AuthWrapper from '@/components/AuthWrapper.svelte';
    import type { PageData } from './$types';
	import TeacherLoginForm from '@/components/TeacherLoginForm.svelte';
    
    export let data: PageData;
</script>
<AuthWrapper>
    <TeacherLoginForm />
</AuthWrapper>