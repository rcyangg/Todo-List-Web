import axios, { AxiosError, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';
import { config } from '@/config';
import { Task } from '@/services/jojoservice/jojo.types';

// TODO: figure out how to dynamic get stage
const CURRENT_STAGE = 'dev';
// TODO: implement retry with axiosRetry https://github.com/softonic/axios-retry
axiosRetry(axios, { retries: 3 });


export const listTasks = (): Promise<Task[]> => {
  const { jojoApiConfig: currentConfig } = config[CURRENT_STAGE];
  const url = `${currentConfig.endpoint}/tasks`;
  const token = localStorage.getItem('access_token');
  return axios
    .get(url, { headers: {'Authorization' : `Bearer ${token}`}})
    .then((response: AxiosResponse) => {
      if (response.status === 204) {
        return [] as Task[];
      }
      return response.data as Task[];
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

export const updateTask = (task: Task) => {
  const { jojoApiConfig: currentConfig } = config[CURRENT_STAGE];
  const url = `${currentConfig.endpoint}/tasks`;
  return axios.post(url, task).catch((error: AxiosError) => {
    return Promise.reject(error);
  });
};

export const addTask = (task: Task): Promise<Task> => {
  const { jojoApiConfig: currentConfig } = config[CURRENT_STAGE];
  const url = `${currentConfig.endpoint}/tasks`;
  return axios
    .put(url, task)
    .then((response: AxiosResponse) => {
      return response.data as Task;
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

export const deleteTask = (task: Task) => {
  const { jojoApiConfig: currentConfig } = config[CURRENT_STAGE];
  const url = `${currentConfig.endpoint}/tasks/${task.id}`;
  return axios.delete(url).catch((error: AxiosError) => {
    return Promise.reject(error);
  });
};
