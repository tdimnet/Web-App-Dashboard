//The dropdown notification menu
$('.icon-bell-element').click(function () {
  $('#dropdown-notification-menu').toggle();
});

//Close the alert dialog box
$('.close-button').click(function () {
  $('.alert-box').fadeOut("slow");
});


//General settings for the chart
Chart.defaults.global.legend.display = false;
Chart.defaults.global.responsive = true;


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
              pointBorderColor: "#7478BF",
              pointRadius: 7,
              pointBorderWidth: 2,
              pointBackgroundColor: "#fff",
              pointHoverRadius: 12,
              pointHoverBackgroundColor: "#7478BF",
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



  //Start: The daily traffic widget
var $dailyTrafficWidget = $('.daily-traffic-widget');

var dataDailyTrafficWidget = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF'
            ],
            borderColor: [
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF',
                '#7377BF'
            ],
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100],
        }
    ]
};

var myDailyWidget = new Chart($dailyTrafficWidget, {
  type: 'bar',
  data: dataDailyTrafficWidget
});
  //End: The daily traffic widget


  //Start: The daily traffic widget
var $mobileUsersWidget = $('.mobile-users-widget');

var dataMobileUsersWidget = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [15, 15, 70],
            backgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF"
            ],
            hoverBackgroundColor: [
                "#81C98F",
                "#74B1BF",
                "#7377BF"
            ]
        }]
};

var myMobileUsersWidget = new Chart($mobileUsersWidget, {
  type: 'doughnut',
  data: dataMobileUsersWidget
});
  //End: The daily traffic widget
