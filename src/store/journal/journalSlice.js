import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: []
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNotes: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;

            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        deleteNodeById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote,
setActiveNote,
setNotes,
setSaving,
updateNotes,
deleteNodeById,
savingNewNote } = journalSlice.actions;