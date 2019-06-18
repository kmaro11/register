<template>
    <div class="">
        <div style="width: 100%; max-width: 350px">
            <FunctionalCalendar
                    v-model="calendarData"
                    :is-date-picker='true'
                    :disabledDayNames="disabledDays"
            ></FunctionalCalendar>
        </div>
        <div>
          <div v-for="item in works">
            <div @click="selectWorkType(item.time)">{{item.name}}</div>
          </div>
            <div v-for="item in hours">
                <div @click="selectHour(item.time)">{{item.timeName}}</div>
            </div>
        </div>
      <div>
        <p>Type: {{selectedTime}}</p>
        <p>Time: {{selectedWork}}</p>
      </div>
    </div>
</template>

<script>
  import { FunctionalCalendar } from 'vue-functional-calendar';
  // @ is an alias to /src

  export default {
    name: 'home',
    data () {
      return {
        calendarData: {},
        disabledDays: ['Sa', 'Su','Mo'],
        selectedTime: '',
        selectedWork: '',
        hours: [
          {
            timeName: '8',
            time: '8',
          },
          {
            timeName: '9',
            time: '9',
          },
          {
            timeName: '10',
            time: '10',
          },
          {
            timeName: '11',
            time: '11',
          },
          {
            timeName: '12',
            time: '12',
          },
        ],
        works: [
          {
            name: 'One hour',
            time: '60'
          },
          {
            name: 'Half hour',
            time: '30'
          },


        ],
      }
    },
    components: {
      FunctionalCalendar
    },
    methods: {
      selectHour (time) {
        console.log(time)
        this.selectedTime = time
      },
      selectWorkType (type) {
      this.selectedWork = type
      }
    }
  }
</script>
