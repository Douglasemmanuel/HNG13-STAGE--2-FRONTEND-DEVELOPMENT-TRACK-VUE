// composables/useCurrentUser.ts
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export interface CurrentUser {
  firstName: string;
  lastName: string;
  email: string;
}

export function useCurrentUser() {
  const currentUser = ref<CurrentUser | null>(null);
  const router = useRouter();

  // Load user from localStorage on mount
  onMounted(() => {
    try {
      const storedUser = localStorage.getItem('ticketapp_session');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser) as CurrentUser;
        currentUser.value = parsedUser;
      }
    } catch (err) {
      console.error('Failed to parse currentUser from localStorage', err);
      currentUser.value = null;
    }
  });

  // Logout function
  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    currentUser.value = null;
    router.push('/');
  };

  return { currentUser, logout };
}
