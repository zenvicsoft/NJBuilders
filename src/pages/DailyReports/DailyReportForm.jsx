import DateSelector from '@/components/InputBoxes/DateSelector'
import MultiSelect from '@/components/InputBoxes/MultiSelect'
import SingleSelect from '@/components/InputBoxes/SingleSelect'
import TextFieldBox from '@/components/InputBoxes/TextFieldBox'
import TextInput from '@/components/InputBoxes/TextInput'
import React from 'react'

const DailyReportForm = () => {
  return (
    <div>
        <form>
            {/* Date */}
            <DateSelector/>
            {/* Site */}
            <SingleSelect/>
            {/* Labour */}
            <MultiSelect/>
            {/* stock */}
            <TextFieldBox/>
            {/* supplier */}
            <MultiSelect/>
            {/* shop */}
            <MultiSelect/>
            {/* what things are begin shifted */}
            <MultiSelect/>
            {/* From Site */}
            <SingleSelect/>
            {/* From Site */}
            <SingleSelect/>
            {/* Vehicle */}
            <SingleSelect/>
            {/* Other Expence */}
            <TextFieldBox/>
            {/* Tools */}
            <MultiSelect/>
            {/* Remark */}
            <TextFieldBox/>
            
        </form>
    </div>
  )
}

export default DailyReportForm