import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNotes } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    
    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );
        
        const { uid } = getState().auth;

        if(!uid) {
            console.error("Error: No se encontró el UID del usuario.");
            return;
        }

        const newNote = {
            title: "",
            body: "",
            imageUrls: [],
            date: new Date().getTime()
        };
        
        try {

            const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ));
            await setDoc( newDoc, newNote);
    
            newNote.id = newDoc.id;
    
            //! dispatch
            dispatch( addNewEmptyNote( newNote ));
            dispatch( setActiveNote( newNote ));

        } catch (error) {
            console.error("Error al guardar la nueva nota:", error);
        }


        
    }

}

export const startLoadingNotes = () => {
    return async (dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )

    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        if (!note || !note.id || !uid) {
            console.error("Error: La nota activa o el UID están vacíos");
            return;
        }

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        try {
            const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
            await setDoc( docRef, noteToFireStore, { merge: true} );

            dispatch( updateNotes(note) );
        } catch (error) {
            console.error("Error al actualizar la nota en Firestore:", error);
        }
        
        dispatch( updateNotes( note ));
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) ) 
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch( setPhotosToActiveNote( photosUrls ) )
    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal; 

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc( docRef );

        dispatch( deleteNoteById( note.id ) )
    }
}