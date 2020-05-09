import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calender';

  //calendarPlugins = [dayGridPlugin];

  ngOnInit(){
  
    setTimeout(() => {
    
     $("#calendar").fullCalendar({  
                     header: {
                         left   : 'prev,next today',
                         center : 'title',
                         right  : 'month,agendaWeek,agendaDay'
                     },
                     navLinks   : true,
                     editable   : true,
                     eventLimit : true,
                     eventRender: function(event, element, view) {
                       element.find('span.fc-title').attr('data-toggle', 'tooltip');  
                       element.find('span.fc-title').attr('title', event.title);   
                    },
                     events: [
                       {
                         title: 'All Day Event',
                         description: 'description for All Day Event',
                         start: '2019-12-01'
                       },
                       {
                         title: 'Long Event',
                         description: 'description for Long Event',
                         start: '2019-12-07',
                         end: '2019-12-10'
                       },
                       {
                         groupId: '999',
                         title: 'Repeating Event',
                         description: 'description for Repeating Event',
                         start: '2019-12-09T16:00:00'
                       },
                       {
                         groupId: '999',
                         title: 'Repeating Event',
                         description: 'description for Repeating Event',
                         start: '2019-12-16T16:00:00'
                       },
                       {
                         title: 'Conference',
                         description: 'description for Conference',
                         start: '2019-12-11',
                         end: '2019-12-13'
                       },
                       {
                         title: 'Meeting',
                         description: 'description for Meeting',
                         start: '2019-12-12T10:30:00',
                         end: '2019-12-12T12:30:00'
                       },
                       {
                         title: 'Lunch',
                         description: 'description for Lunch',
                         start: '2019-12-12T12:00:00'
                       },
                       {
                         title: 'Meeting',
                         description: 'description for Meeting',
                         start: '2019-12-12T14:30:00'
                       },
                       {
                         title: 'Birthday Party',
                         description: 'description for Birthday Party',
                         start: '2019-12-13T07:00:00'
                       },
                       {
                         title: 'Click for Google',
                         description: 'description for Click for Google',
                         url: 'http://google.com/',
                         start: '2019-12-28'
                       }
                     ]  // request to load current events
                 }).on('click', '.fc-agendaWeek-button, .fc-month-button, .fc-agendaDay-button, .fc-prev-button, .fc-next-button', function() {
$('[data-toggle="tooltip"]').tooltip();
});
                 $('[data-toggle="tooltip"]').tooltip();
  }, 100);
  }
}
