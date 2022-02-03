import { newArrayIntQueue } from "../src/arrayqueue";
import { newLinkedListIntQueue } from "../src/linkedlistqueue.js";

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
let createQueue = newLinkedListIntQueue
// let createQueue = newArrayIntQueue

// TODOs:
// write more test cases to test dequeue and clear functions.

test("test isEmpty: newly created list should be empty", () => {
    expect(createQueue().isEmpty()).toBeTruthy()
})

test("test isEmpty: list with 1 element is not empty", () => {
    const queue = createQueue()
    queue.enqueue(2)
    expect(queue.isEmpty()).toBeFalsy()
})

test("test peek: newly created list should peek null", () => {

    expect(createQueue().peek()).toBeNull()
})

test("test peek: queue with 2 element should peek the last one", () => {
    const queue = createQueue()
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.peek()).toEqual(2)
})

/*****/
test("test clear: all the elements removed", () => {
    const queue = createQueue()
    for (let i =0;i<11;i++)
        queue.enqueue(i)
    queue.clear()
    expect(queue.size()).toBe(0)
})


test("test dequeue: queue is empty and dequeue", () => {
    expect(createQueue().dequeue()).toBeNull()
})

test("test clear : list should be empty",() =>{
    expect(createQueue().clear()).toBeNull
})

test("clear with no entry", ()=>{
    const queue = createQueue()
    queue.clear()
    expect(queue.isEmpty()).toBeTruthy()
})

let param = [5, 10, 1000000]
// parameterized test, apply to each value of the parameter
test.each(param)("test enqueue: enqueued number %d is correct", (nr) => {
    const queue = createQueue()
    queue.enqueue(nr)
    expect(queue.peek()).toBe(nr)
})

// can nest tests with shared descriptions for better readability
describe("test size: ", ()=> {
    test("1 entry", ()=>{
        const queue = createQueue()
        queue.enqueue(5)
        expect(queue.size()).toBe(1)
    })

    test("11 entries", ()=>{
        const queue = createQueue()
        for (let i =0;i<11;i++)
            queue.enqueue(i)
        expect(queue.size()).toBe(11)
    })
})