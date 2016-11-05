/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

  // Load demo images from flickr:


  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: 'Sintel',
      href: 'https://mvvideo15.meitudata.com/5808cb3b633941200.mp4',
      type: 'video/mp4',
      poster: 'http://mvimg1.meitudata.com/5808cbe75dc638809.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'https://upload.wikimedia.org/wikipedia/commons/7/75/' +
        'Big_Buck_Bunny_Trailer_400p.ogg',
      type: 'video/ogg',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
        'Big.Buck.Bunny.-.Opening.Screen.png/' +
        '800px-Big.Buck.Bunny.-.Opening.Screen.png'
    },
    {
      title: 'Elephants Dream',
      href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv/' +
        'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
      type: 'video/webm',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    },
    {
      title: 'LES TWINS - An Industry Ahead',
      type: 'text/html',
      youtube: 'zi4CIXpx7Bg'
    },
    {
      title: 'KN1GHT - Last Moon',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
    }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
