import { useState, useEffect } from 'react';
import { firebase } from '../Firebase';
import moment from 'moment';
import { collectedTasksExist } from '../helpers'



export const useTasks = selectedProject => {
    const [task, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('task')
            .where('userId', '==', 'user01');
        
        unsubscribe = selectedProject && !collectedTasksExist(selectedProject) ?
            (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
            : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')))
                : selectedProject === 'INBOX' || selectedProject === 0
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;
        unsubscribe =unsubscribe.onSnapshot(Snapshot )
        const newTasks = Snapshot.Snapshot.docs.map(task => ({
            id: task.id,
            ...task.data(),
        }));

        setTasks(
            selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                        task.archived !== true
                )
                : newTasks.filter(task => task.archived !== true)
        );
        setArchivedTasks(newTasks.filter(task = task.archived !== false))
    }, [selectedProject]);
}
