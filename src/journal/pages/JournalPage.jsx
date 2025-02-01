import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView></NothingSelectedView> */}
      <NoteView></NoteView>
    </JournalLayout>
  )
}
