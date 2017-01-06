//The dropdown notification menu
$('.icon-bell-element').click(function () {
  $('#dropdown-notification-menu').toggle();
});

//Close the alert dialog box
$('.close-button').click(function () {
  $('.alert-box').fadeOut("slow");
});



  //Start: The web traffic widget
//Creating the variables: the container class & the chart itself
var $webTrafficWidget = $('.web-traffic-widget');

var dataWebTrafficWidget = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [
          {
              label: "Traffic",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "#E2E3F6",
              borderColor: "#7478BF",
              borderWidth: 1,
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "#7478BF", //Think to change the other color elements
              pointBackgroundColor: "#fff",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
              spanGaps: false,
          }
      ]
};



var myTrafficWidget = new Chart($webTrafficWidget, {
  type: 'line',
  data: dataWebTrafficWidget,
  //options: options
});
  //End: The web traffic widget
