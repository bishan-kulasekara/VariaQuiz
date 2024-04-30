<script>
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
</script>

<style>
    /* Additional custom styles if needed */
</style>

<form class="flex flex-col w-full max-w-sm items-center space-y-4 py-8">
    <Input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
    <Input type="password" placeholder="Password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
    <Button type="submit" >Enter Exam</Button>
</form>