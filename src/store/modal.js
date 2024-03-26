import { create } from 'zustand'

export const useForm = create((set) => ({
  isShow: false,
  toggleShow: () => set((state) => ({ isShow: !state.isShow })),
}))