
$(document).ready(function() {
  $('#home .vertical-line').addClass('height-animation')
  setTimeout(function() {
    $('#home').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#home').find('.hide').eq(i).addClass('show fade-in-up')
      }, 250 * (i+1))
    })
  }, 1000)
})

var scroll = 0

$(window).scroll(function() {
  scroll = $(this).scrollTop()

  if(scroll > $('#about').offset().top - $(window).height() / 1.5) {
    $('#about').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#about').find('.hide').eq(i).addClass('show fade-in-up')
      }, 250 * (i))
      setTimeout(function() {
        $('#about .vertical-line').addClass('height-animation')
      })
    })
  } else {
    $('#about .vertical-line').removeClass('height-animation')
    $('#about').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#about').find('.hide').eq(i).removeClass('show fade-in-up')
      }, 250 * (i))
    })
  }

  if(scroll > $('#skills').offset().top - $(window).height() / 1.5) {
    $('#skills').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#skills').find('.hide').eq(i).addClass('show fade-in-up')
      }, 250 * (i))
    })
    setTimeout(function() {
        $('#skills .vertical-line').addClass('height-animation')
      })
  } else {
    $('#skills .vertical-line').removeClass('height-animation')
    $('#skills').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#skills').find('.hide').eq(i).removeClass('show fade-in-up')
      }, 250 * (i))
    })
  }

  if(scroll > $('#portfolio').offset().top - $(window).height() / 1.5) {
    $('#portfolio').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#portfolio').find('.hide').eq(i).addClass('show fade-in-up')
      }, 250 * (i))
    })
    setTimeout(function() {
        $('#portfolio .vertical-line').addClass('height-animation')
      })
  } else {
    $('#portfolio .vertical-line').removeClass('height-animation')
    $('#portfolio').find('.hide').each(function(i) {
      setTimeout(function() {
        $('#portfolio').find('.hide').eq(i).removeClass('show fade-in-up')
      }, 250 * (i))
    })
  }
})