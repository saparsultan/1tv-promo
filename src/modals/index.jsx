'use client'
import {useForm} from "@/store/modal";
import Feedback from "@/modals/Feedback";
import '@/modals/index.scss'

export default function Modals () {
  const {isShow} = useForm()
  return (
      <>
        {isShow && <Feedback/>}
      </>
  )
}