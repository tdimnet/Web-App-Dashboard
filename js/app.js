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
  labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40, 30],
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
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var myMobileUsersWidget = new Chart($mobileUsersWidget, {
  type: 'doughnut',
  data: dataMobileUsersWidget
});
  //End: The daily traffic widget
