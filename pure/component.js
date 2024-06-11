import { createApp, reactive, ref, computed } from "vue"

export const comp1 = {
    // emits: ['plus'],
    props: ['num'],
    setup(props) {
        const num1 = ref(props.num + 1)
        return { num: props.num, num1 }
    },
    template: `
    <div>
    <p>num = {{num}}, num1 = {{num1}}</p>
    <!-- <button>num+1</button> -->
    </div>
    `
}
