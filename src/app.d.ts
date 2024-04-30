// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		 interface Locals {
			user?: User;
			supabase: SupabaseClient;
		 }
		 interface PageData {
			user?: User;
		 }
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
