import { product } from "../data/data"

export const pedirdatos =  () => {

    return new Promise ((resolve,reject) => {

        setTimeout (() => {

            resolve(product)
        },3000)

    })
}