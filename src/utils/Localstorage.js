import alldata from '../data/transactions.json'

const STORAGE_KEY = "Transactions"

export const InitilizeData = (data)=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const getData = ()=>{
    let transactions = localStorage.getItem(STORAGE_KEY)
    if(!transactions){
        InitilizeData(alldata)
        transactions = localStorage.getItem(STORAGE_KEY)
    }
    return JSON.parse(transactions)
}

export const setData = (transactions)=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
}

export const addTransaction = (newTransaction)=>{
    const transactions = getData()
    transactions.push(newTransaction)
    setData(transactions)
}