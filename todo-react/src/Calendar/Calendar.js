import React, {  useState } from 'react'

import { DatePicker } from 'react-dayjs-picker'
import 'react-dayjs-picker/dist/index.css'

export const DatePick = () => {
    const [open, setOpen] = useState(false)

    return <DatePicker isOpen={open} setIsOpen={setOpen} />
}