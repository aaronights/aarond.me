(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{88:function(e){e.exports={data:{post:{title:"Raspberry Pi 2 powered Arcade",content:'<p>For a while now I\'ve been wanting to do a project with the Raspberry Pi. The ultra low cost, single board computer is making roads in both education and the do-it-yourself maker scene. It\'s a great platform to learn programming and basic electronics, and the heart of many enthusiast projects. After thinking about what I could make, I settled on an emulation-based arcade machine.</p>\n<p>The new Raspberry Pi 2 pushes platform over the hump to be the ideal brains inside a homemade arcade system. Not only does it give you reasonably fast loading times and smooth menu navigation, but its quad-core Broadcom processor allows for emulation of power demanding games and platforms. The Pi platform also has a big advantage for an arcade machine - the General Purpose Input/Output pins allows standard arcade stick and buttons to be directly wired up to the unit, without any need for a keyboard simulator or any kind of USB controller. Using the Retrogame software, it\'s just a matter of connecting each button or joystick direction to both an unused I/O and a ground pin.</p>\n<p><a href="/assets/static/src/media/images/blog/PiGloryShot.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1380\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-53\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-53)\' width=\'1920\' height=\'1380\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAuAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABgcDBAUIAv/EAC8QAAIBAwMDAwMDBAMAAAAAAAECAwQFEQAGIRJBYTFRcRMigQcVkRQyQrFSYsH/xAAZAQEAAwEBAAAAAAAAAAAAAAADAgQFAQD/xAAjEQACAgIABgMBAAAAAAAAAAABAgADESEEEiIxQVFxobHw/9oADAMBAAIRAxEAPwDlVVLEBRknRrtX9P7rf4fqUlPK4DhT0gYHyx4Gsm0UAiqFklUMg7H/AHp1fo7fUoNwLSSOP6atHQRn0f8Axb/z86MOGbE0q%2bEKoWIyfU0Nt/pDPHCgr6qOBMcxxDrb%2beB/vVrdW39n2C1T0001QLiASjorSOGx6EcLjTcqXkjdPplVjAPXle/bBJwO/vrOe5UEqEVVVTsgH3B2DYHwRgfwNMFHqGLrCRuczWS621bxDFdElWlPDODgK3nv0%2b%2bnRTRwxwItOqLEB9oT0xqP9Qtj2bdNlep2%2btFFdIsvG0PSgm/6Nj37H38HSx2LvCotDfs1%2bEsdLEWEckiHMB7q3jj8aRa15cpKnE22O3XGwNe1VSO%2bdBW19909/vP9DBSPGCGZZGcHIHjHfWtuPccdtUwUxElWR6eoT58%2bNRYFdGChz2idtNoqrpJHBSQM5744C/J7aau1tmU1tCTVjfXqh/b08Kh8dyfOti2UVPb4FhpIlijHZR6%2bT7nV%2bR2SF3jHVIFJUe57arrWFE0LeOdz06/Ys9173q7/ALjrqYBv261R9EhWXp63XIZh888aDxeIq%2bpaCBavpZerBmVuO%2bfz21YqbVLTXGueooZBKzPJKeXQ4bOQcc5OefTQzWCqpgXgVR9TOCqEEDHvqwFJGRM2xndiR5%2boW26%2bvYqtJYayrVmBVAGI6ew%2bDyfGsq71NRWyV9RLTMJZUZ5JmBLOe5Jz6/jUFoFWlJLTVMKrFBAZfqMCxBJPqe3Of41lrFG80YiMbyOwChDlmJPoPc50leicn7nkDZ3uR7TrbpBe6c2OFpq4hlRAuTyME%2bOO/bTJuEr222QCugC3ZwXlj6%2bshz/amfjknz41b2hYqGyT1RqGnpK6GBJqjDhWEjdRMQ8AAZH/ACJ9tBe8NxFaueGMiSZuXYgMeo%2b5PrgcaCywk5llUCncfan21PH51XU6lVsa5BEtdImjKPyCMc63qMWirt6vWUlB9UfbIjQoSWHfGO/rodWTAzoKrd9ftdVcqyCjDFYuheo55Un7iO559Nc8y3UytWyN8j%2b%2bPyHtxsW1qGkq5JbXb6SnmbqmkkPTk/OePjS/lq9r/vDUlhsf16ulKzpPICsQYHgrk5JB8aVNRvG47ivatdWM5lkVYFY/bDk4wB%2beT66MbCjvfmllmkM1KkkoZeMvwCD7rjOBoWsw/LiQCqd47SfdFXHTW%2bqlLSS188rPIwlPQ44KIPGW9s6TM1SzzyySIPqsCCfTB7nW1uy6PVXetDJiIsVC55%2b3hTnxjQ3pRIudz//Z\' /%3e%3c/svg%3e" width="1920" alt="The new Raspberry Pi 2" data-srcset="/assets/static/PiGloryShot-w480.418a332a63478bf5358426f0bd3dff4d.jpg 480w, /assets/static/PiGloryShot-w1024.418a332a63478bf5358426f0bd3dff4d.jpg 1024w, /assets/static/PiGloryShot-w1920.418a332a63478bf5358426f0bd3dff4d.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/PiGloryShot-w1920.418a332a63478bf5358426f0bd3dff4d.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/PiGloryShot-w1920.418a332a63478bf5358426f0bd3dff4d.jpg" width="1920" alt="The new Raspberry Pi 2"></noscript></a>\n<em>The new Raspberry Pi 2</em></p>\n<p>A big factor in any arcade unit is the choice of monitor or screen. Natively the Raspberry Pi can output a HDMI signal at resolutions up to full 1080p, or an older Composite video signal like every console in the 90\'s used. If you have a CRT or other older monitor you can get <a href="http://www.adafruit.com/products/1151" target="_blank" rel="nofollow noopener noreferrer">a cheap, sub $20, adapter</a> to let you use a VGA connection.</p>\n<h2 id="building"><a href="#building" aria-hidden="true"><span class="icon icon-link"></span></a>Building</h2>\n<p>The monitor I used was an older 17" LCD. A big factor in my choice is that is has a good old, 4:3 aspect ratio. A widescreen monitor will work fine, but you\'ll be stretching the picture or wasting space with black bars on either side if you are emulating retro systems not designed with widescreen in mind.</p>\n<p>For the sake of portability, my build was a bartop unit rather than a full stand up machine. Both the monitor I use and this small size will limit it to 1 player controls, but I\'ll keep a USB gamepad handy for multiplayer games.</p>\n<p><a href="/assets/static/src/media/images/blog/IMG_20150325_233003.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1440\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-63\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-63)\' width=\'1920\' height=\'1440\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAwAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABgcDBAUIAAL/xAAyEAABAwIEBQMDAgcBAAAAAAABAgMEBREABhIhEzFBUWEHIoEUMnGRoRUjQmJyscHR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwIBBP/EAB0RAAMAAgMBAQAAAAAAAAAAAAABAhEhAxIxQVH/2gAMAwEAAhEDEQA/AAHNLsEUxynzw2l11aVxm0Ku4ojclXzcX64waJSYUup8eewXmWwOGzpK1vKOwJHPSP0wTZVyU4mRInViYmXIeFnFhPIdQFHcX5G1tsGDLDCFKVDYabQo7htAGvybc8dD5XTwZHCp2xbSvT92YZSoyY8AqJ4TesuEb8729v4F8VYsbONNSGnXWwGzoTqVcKAGxBGGi4GkoWJCksknSAFW1f8AT%2bMeWxFjscR15KGQLniLCR8k4l7FWhfs1jNTI9zLDo8LGLbeacwtj%2bbRi5/gUnBYiM3Ng/UQGeK0ftUtBSFjuPHnAnWZioDi0S6XOjEb8RIKkEdwobYjwRJVokZznMceS0/l6RqUbbt7frywO5ozaiXl%2bewinNMxJchP2uFK1rSki9rWsAP3xIvMzTcZ8tz3QrQrSlXU25YX1RqBlMRWUpsGQdx1UeZ/YYpUHcdR6UfN0eZW10OSlEV1JHC1XtISRcW8nt1xr12uIpBZixYr0yov7MRkC1/Kj/SkYRzdBqM1xS3Vuh5psFCnFG9hyAPjpg/9Ps6IlONUnMLhRMPtZklVg5/avsfPXEylktqsBfEoVVektVDMc2NZtJ4cZi4bbJG5ue2B6mE5zzQ9GAWaBBUemzzg5FQ6gdB%2bMb2dHDGpTi3nlniXGlR2SkXJt%2bmNX06on8Ky219Q0lMiWfqXEWto1ck/At84ptpZJ43LtxjxZNqnwfo4TUfiFwNp06lCxPxiRcYFpbdjZQIPX/eLRbIHtV8K3xGpej7wR55jBpjUvoua56V0qfBKIrz0eWLkPKOpJJN90/8AmEdmOjvUirLgOusvuIOkKavpO9uoGOuQpJTcDbuN8Jf1uZLmZaMpKb6Y6ze3XXhZXbRz023sxWK0am6EFttDSLqLyifYkdSOW/QYCq%2b6xqjtR7FadTji%2bpUT38C2NaA0hqDJbYeK2nAlxSri4SNt/m%2bByQsSJJW2n230pHjpjOuEdPJiYx%2bnR%2bU6Q3UsuUNyqyHKg6llMgKX7QARskgfdblv2wbtnCdyPmybR6XGgyWESENpABKilSR0Hawwbt58oyOEJ7i4ZdOlJcF0k9rjGOWGqn56F%2bPlXLFeFOizGwuLIaeR3QoHE5ULYlIymQLZTcqQShXdO2FH6ul53MdKiuPAtJjLc0j23JXYn82GG%2boi2Ed69qArFPASrWYxGoKttrO2G42k8g1l6P/Z\' /%3e%3c/svg%3e" width="1920" alt="Oh the dust" data-srcset="/assets/static/IMG_20150325_233003-w480.ccfe653a0b309f008f5848f143ccec94.jpg 480w, /assets/static/IMG_20150325_233003-w1024.ccfe653a0b309f008f5848f143ccec94.jpg 1024w, /assets/static/IMG_20150325_233003-w1920.ccfe653a0b309f008f5848f143ccec94.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/IMG_20150325_233003-w1920.ccfe653a0b309f008f5848f143ccec94.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/IMG_20150325_233003-w1920.ccfe653a0b309f008f5848f143ccec94.jpg" width="1920" alt="Oh the dust"></noscript></a>\n<em>Oh the dust</em></p>\n<p>I built my unit out of 12mm MDF. Good quality plywood would be a lighter solution, but can be a pain to paint and has a tendency to split and crack. I opted to hand cut all my pieces. It does involve cutting a bit bigger then you need and working your biceps with some heavy sanding and a solid sanding block. A jigsaw would work, but remember to take it very slowly and be prepared for mistakes. The ideal solution is a standing joiners band saw - if you can get a professional to cut out your designs you\'ll get the best result. No matter what you use, there will be a huge amount of dust from MDF. Don\'t breathe it in! A cheap mask is worth the investment.</p>\n<p>Any good power drill should be enough to cut the holes out for buttons and joysticks. Look for a Spade bit at the hardware store. Always get a size on the smaller size rather than larger to ensure nothing rattles and has a tight fit.</p>\n<p>A cheap wood glue is good just to hold things together before putting screws in. I fixed the sides to the base, but used nuts and bolts for the controller board so it can be easily removed for maintenance and even help out with the assembly process.</p>\n<p>I used a bit of thick card from a craft store for the bezel around the monitor. It\'s not structural in any way, so doing this saves some weight compared to using more wood.</p>\n<p><a href="/assets/static/src/media/images/blog/spraypaint.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1890 1695\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-76\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-76)\' width=\'1890\' height=\'1695\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA5AEADASIAAhEBAxEB/8QAHAAAAwEBAQADAAAAAAAAAAAABQYHBAMAAQII/8QAPRAAAgEDAgMFBAYHCQAAAAAAAQIDBAURABIGITEHE0FRYRQicZEVMnKhscEjMzRCUoHwNTZic4KEstHh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAwQFAgYAAf/EACoRAAICAQMCBQMFAAAAAAAAAAECAAMRBCExBRITMkFhgSJxkTNRocHR/9oADAMBAAIRAxEAPwAteOMUtYiZLbXVkM%2bXiaN12kADcp3HIxnOk7i7jCsqbBV0sNnp4KeaEhiZi8i88nAwBn%2bZGlOqudwaz2%2botw3JSTzwmOU5xu55J8TgAD4aErcJK211j193aKqjzsip4gFcEcgD%2bOs5ZuI52oh3i/JbRPEpp3fYealiAWz1Hhq99nl14Wu/CrWq5Q1i0xBDQ1USzxKRyJQjDLnHnpBouzO4z2SKevmtsUTJlJFrkdCCOXJMnOeXx04WOyrbYqOihppxJM6CapJ3qcYz7wJx6A89bWouQMzxdVBxHThmjtNqeut9Ca1ooo%2b9eFah5miUj6uCcDA54wTz669e6e2y2uCloqaoklrirrJUSYKoGUGXaxzjyOB59NZuDK2nm4yuy2%2bCp7o1LbzEAn6RSAw2/wAIGAfPGeuqTZbPT3SaaWXLRA4G0494Hryx0PhpkKhXJijllft%2b0lDe02CWpW3TCATyiGSeKFQwC5OW5dfDOPHSx2pS00/DlXLcK6fFZVIk1T3YclkQBcKMcsE/zz56LcZMaHtTudDTM0VDGijdEGKFhHubmTzwcg%2bukTteqIxw1ZIaZj3M88kwGeZwSM/dqazA3lA3AG3zzKC/oglfXn44mOWoaSDNB7UkKvHIYpH2ncFPPK88Zz0xyOuM9HLf7lBTRU1PR977jSKgOBjmScdAMnVWsFgtVRaYzdbOaKYqNyioWQbs4wHBz89dl4bpqGsV6ONnKHIjLg4GMczjmdMmvtHtAiwMd%2bYIttpp7RbYI4LvL3kKCKKSSNdm0Z5kf%2b9NfPDlSbpUUs0bBfeJYxOQGCnGfgdKHaPVzrSLb65Sk27vAYU2JgHB%2b0fTlrHwjxTNa4WUR9%2b5ASMt7ioo6DA9ToTsFGcx9dI1jYA%2bZb7VJQ2Koq4I6GpoZmlVneTLM%2b8Fiwbn1wvLqDny099nl1ilsL%2b5KpWfGWGN%2b7LYH3jULqL9xFxFMksEHfxR93lwpIjKggHdnwydWu3VtBb7bb7auaeSBvaizspBYq2cnplmJ5c9MJZ3DHoIrqdGaz%2b5OODnGJ%2bbuLL7X2ztSvtNXQSyU4qnkJjBbaGO7b/Cww2PnoB2v1iStw8kZQIKVnARdoGT5eGi3aDJVVPE8FMVaJJq0RO6qWVUzj/UcfPR/tSsVBcbov0VEUtyU0aQiaAKgwOe0DmAT4%2bedatrxhgM%2b/8AUl6W9rGZX25wPseZWTbI6SqJVEUjAG1fq/LWW7qstvq6anVUqpImMEwJB346HHhnRuunEcis/KIt74T6zDxGdJF/rqgwTypEaVe8VYQ7hmAPicaFKVABYZkiu7TQzz2m71RMyEvE00gLK/UjaAcA%2bp6c9beF7DSkR1FzaVYiN2zb77HyA6AerfLXHtEgp5757Yme8niV9ysOUg5MMf1yOsx4gqBTotNTohVQC0jE48MgaRtZVbB9J3HTdHVcge/jHA/n8SpU3Ec9FTSwWamiooHQoHlczSqD12scBc46AAaWble0idnqq8vJkks8hY%2bfQZOkmWor60bqiqkKn91fdGvRW4tiKlKid2CjcMjJ8zrPiM/lEtIun0alq6wo9%2bT/AL%2bYbsHGYpLiy1sbSU/eF0nJw8RzyPw%2b/T/dJIr7TQ1b1IqI5hhZC28N4DoeepNHZoXLRVsgeTceSD6mPEef4aaOG676JHs4ljCj3x7wWJx5jx3enX46YoJI7TOK6vTW1njLsTvLD36yIpfJ9SemhF1pkmp5YywMzDkq88eR1qj6H4DXOo/VL9pfx0YyAh7TkScXWyw1rrFPuVNu9HU/vljyHxH5aBfQbCCpNMAJYDgrnO4eB/705XDr/uT/AMn1mt/7dN/kTflobUq25l7SdTvp%2blDjO8VaWhqIQ/fUxlZRktjkPTrj5nWyCrip1dd1Osa/Xw%2bRnHp%2bemp/7Mp/sj8NTQ/td9%2b234jX0IMbTN/ULjuxzDc9DdbtT%2b0WiPbCgw1VJiOE%2bm4%2bPljOvtR8GyWtz7bSR1lSxVv0j7I1P%2bEE8z6n5aofHf8Adrhb%2bvDXBP1tD8fy0RUA4kp72s8%2b4n//2Q==\' /%3e%3c/svg%3e" width="1890" alt="spraypaint" data-srcset="/assets/static/spraypaint-w480.71c9984b44dd268d8ce83183dd487d2e.jpg 480w, /assets/static/spraypaint-w1024.71c9984b44dd268d8ce83183dd487d2e.jpg 1024w" data-sizes="(max-width: 1890px) 100vw, 1890px" data-src="/assets/static/spraypaint-w1024.71c9984b44dd268d8ce83183dd487d2e.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/spraypaint-w1024.71c9984b44dd268d8ce83183dd487d2e.jpg" width="1890" alt="spraypaint"></noscript></a>\n<em>Painting</em></p>\n<p>For a nice finish I gave all the wood a good undercoat then sanded it down with a really high grit sandpaper until it was really smooth. A professional unit would get a vinyl stick on decal filled with graphics out of the 90\'s, but I needed to be cheaper. I went with a two tone spray paint finish. Red and Black, just like the Raspberry Pi logo. The main rule when spray painting is many, many thin light coats. Don\'t linger too long over a spot or it\'ll get patchy and run. For sound I took apart a set of cheap, USB powered, speakers. They wont sound amazing, but can plug directly into the Raspberry Pi. I mounted them in the sides - having them inside a marquee banner above the screen would be ideal, but I skipped this to keep the size down.</p>\n<p>You can wire the power for the Raspberry Pi and the monitor directly, but if space isn\'t an issue you can just put a power strip or double adapter in the unit. The Raspberry Pi itself is powered through a microUSB connector, just like the majority of cell phone chargers. If you experience continual and seemingly random errors it might be due to your power adapter not supplying enough juice. Check the label on the adapter to see that it provides at least 1 amp (or 1000 mA) of power. A 2 amp adapter is ideal, especially if you intend to plug several USB devices into your Raspberry Pi.</p>\n<p><a href="/assets/static/src/media/images/blog/IMG_20150422_133921.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1440\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-79\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-79)\' width=\'1920\' height=\'1440\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAwAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABQcEBggBAAP/xAAyEAACAQIFAgMGBgMBAAAAAAABAgMEEQAFBhIhMUEHE2EUIlFxgZEVMkKSocEzsdFF/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgQBAwUABv/EACgRAAEEAQMDAgcAAAAAAAAAAAEAAgMRBBIxYQUhUQYTFCMygbHB0f/aAAwDAQACEQMRAD8AQeVU2cMjVFTTVDUxO9pZAQfnzyRg5lmm6nUeZrR5VII6oxmQ7n2iwPT1JvhtSUQZGDAkEcg4q3h64yzxDURkKpEsK2%2bHNv8AWEopNTiapb0z3ewI3G6O6FweGedqSv4gVYGxtc8/bBKn8M9RGwizKS/oh/5jVdJXyPErBhyL9MDNYVLS5DURPJIN67VMbMhDXG03Xng2OL9SQ1kbLOieGuqh/wCxOL/CIn%2bsebwv1Sw5zepPyhf/AJjQGS1ddkcMqVWa1ldBGwAesPvsSLkAgdRx1%2b4xYKbP4atikFSzOOGWxBU9wR2PBxOpRrdWyyFqHSuZ6VzShp82r3q3nKvtBYbVNwVIP3wHaveGoeRNoPFt3NsM3xwqjU6xjuxPkRRP%2b6SQf1hQ1re%2b4J/LfnASuNBem9PylgkI4/ae8lttiMLHKqkQ62pmX9FXa/o0gH94aOZ0tRSE%2bYAUv%2bZen1%2bGE21Sj6lmB9noxRnzmkcld%2b2ZWsxJ69ha2K4W04hYkzrivkfgrSdDnOYKixxQRsqooBIN%2bnfn0OB2e6rrGyfOGaBAMu/zXQjkBXFve54IxD0vndJW0SVSM5imUMnbjnrip02v4o6Svr8yy1/Zva5lURsASqgIrMG5PQ9Phi4BJ2iMuqqDV9Lls80tTBSwTt5zrCQzXALEC5BsbHm2Llp3MZJstWryx0EDOyu0gWO/T3ipIN7WwisozRINPUSwUq1Qa8cwlcoCzSEKy27%2b8P2jDLpak0%2blESI0bJBIHjVSzSlj3Ivbm1u2CIOyGzfConipWOdT1lYpjkpXjp4VdHBG7czn%2bGB%2buF3Vm8zr1JY3%2b%2bJ2rMxaprpZFkQxw2jSIc%2bXtY3vxYkm5v3%2bQGD2V6TFVClTNO22Yb7IObH1wEw7Ba3SslsJfrO6aGZZtUZhXVUKwImXwPtSUvdp2HU27KDceuEZqR4V1nmZrYnejaQqxUG3YjnDkmlSClEaC1hYDCw1Z59QayGCNnd24sLjscUiWnX5U42CMlrxqrSCdrs%2bF3NNcikybLEyqmFO7JIZSzHYw3sIyoHThTxj4xxSapy564yxQSRv5QQzpGu3qSS179TwB0GAea5BXSPDH7O/lxwQrtDADd5YJ/knEnJdM11Ok1TNC/lGyCFJwnnN1sT2UdSevIA68NBzfKS%2bByyB8txvg/xFKDS0tbTfiu8QJDJeZamM2jRF372tbgiwA737YiTa2zarrHgylUjiAIhp1jJCi1txt%2bojqT8umOV8ecyBKecrFBI1lp6ebYgJ6naOp9T98EdHZNmuRZ0tbSCGIlGQksHYqR0/1gi9u9rm9NyvoEZH2KrL0NXUVVRC0EhzB4t8kW33g1xcW9AQfrh2aVp2Gn8u85GWTyQGU9QR2xShkOZyallzWrdppZQwY7mY8/TnthjZMHGWQLKCsgBBuLdzheR4JoJ04BgxxLJ2ddVxV2v/2Q==\' /%3e%3c/svg%3e" width="1920" alt="Everything secured in place with tape." data-srcset="/assets/static/IMG_20150422_133921-w480.c073f52527a5891170b4e012d0fb823f.jpg 480w, /assets/static/IMG_20150422_133921-w1024.c073f52527a5891170b4e012d0fb823f.jpg 1024w, /assets/static/IMG_20150422_133921-w1920.c073f52527a5891170b4e012d0fb823f.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/IMG_20150422_133921-w1920.c073f52527a5891170b4e012d0fb823f.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/IMG_20150422_133921-w1920.c073f52527a5891170b4e012d0fb823f.jpg" width="1920" alt="Everything secured in place with tape."></noscript></a>\n<em>Everything secured in place with tape.</em></p>\n<p>Wiring up the buttons is the toughest part. First, <a href="http://www.element14.com/community/docs/DOC-73950/l/raspberry-pi-2-model-b-gpio-40-pin-block-pinout" target="_blank" rel="nofollow noopener noreferrer">look at this diagram</a>. It\'s the layout of the pins on the Raspberry Pi, and it can seem very confusing. Pick one of the pins labeled GPIO for each button you want to wire up, and pick four for a joystick (one for each direction). You need to wire these to one of the connections on your arcade buttons, and the best way to do this is using a set of super inexpensive <a href="https://www.adafruit.com/products/266" target="_blank" rel="nofollow noopener noreferrer">female jumper wires</a>. The buttons you buy might come with suitable wires for the connections, so try and look for a good deal. The second step is to wire the other connection on your arcade buttons to one of the ground pins on the Raspberry Pi. Unlike the GPIO pin, the ground pin does not have to be unique to each button. You can daisy chain as many buttons as you like to just one ground pin, and if you want more than five or six buttons you\'ll have to. The same applies to connecting joysticks.</p>\n<p><a href="/assets/static/src/media/images/blog/IMG_20150331_234750.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1440\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-83\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-83)\' width=\'1920\' height=\'1440\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAwAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAcFBgIDCAEA/8QAMxAAAgECBAUCBQMDBQAAAAAAAQIDBBEABQYSEyExQVEiMgcUYXGhUoGRCCMkQmJy0fD/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQMA/8QAHhEAAgICAwEBAAAAAAAAAAAAAQIAAxEhEiIxUbH/2gAMAwEAAhEDEQA/AOWLXUfTHwGMkFyR5HLGyGNpGCoCWY2UDmSfoMISz2klemqIp4TtkjYOp8EG4x0ZorXKZ4sS1zw0mZbQYZ77RN/tsev/AB/i2F3o34Nan1CY5ainGVUTDdxqz0sR5VPcf3sMO3S2gtLacoo46mN8ylh9Qnqowyhr/wClOn2vfHM2I1xsGVXVWgq/O6z57J4aWmd2/vo7MsZv1YEjl5IF8GU2g9PZEkUma1kk5mdY0j3FYzIR7QR6mvY%2bMNPMjHUUlPNTsHUL6iD1Hm3bFG1bqGiyiONKtJZHdhbhru2eGPjCW%2b1TxUzJqarOzDMUvxe2QxZTW5TlfyMNmRgYwjBgb/za/P8AOFrksyzZmsMkphgnO2Q3sCPr5588PnWxh1DpiWShkRhxFdHZL2axBuLEr0HPCdzOgmhjiklpZIJJH2M4T0kkHobWOILC%2bmO5oKwhyo1BNY6bqdN5rwpVPBf1wt5X/wByw1P6d8yy%2bJcyozS0keaRsJo6sxAymJrDaGPSxt084u%2bs9MQamySSklCpUJd4JLc1a3L9jjn/ACeurNGazpamojaKWmlMVRH%2bpDyYfuDcfYYJGsRsAe48nTHxUrM%2bodM01Tl7zq3HBqOC1pjFYgMO/W1/sMCZRqxaXJVqc4aF42hvJuIEjIOrMvnpcr5viaFWK2KOYyGVGQFHJvdbcsLfWeXx0%2bqaeeSNKuLMAImpto3IqKdxHkWboCDfEVg5AgbqsNrtfOtSI8pi%2bWonguWlprlmJ7Hdy7Wt1ueeAqKpmrtzLLT8RHuyihQueXuDO3X6DFXyvJppnEISaBYJ5JY4Al42BAFl6m1gOpNsMnIchVkiepHy6wcmVupa3b%2bPr2xxPfCiLgOPb9mhsoWmyfj5fRf5MMfFVIxcFgL8ME9V7c/%2bsY01G2a0EdXHTQzxSbZdirZoyRusUPcX7H9sW%2brqlc/JUSXqAvoB6ID0kfwPA6k/jxaJYY4UhZo3iRYw/wCpQLeod8JkB1ClmPJWVoayjzKmgizF0WdXJjjQbECjqA1%2bVza3LFT%2bJOnp6krX1FLG9QoVGqYRZWW/Iup9pHm5H2xfKUCbOa6ZiW4QSnQnty3H8tiT4W6zP6uxHUHFIB0Yq7WqbksrWiIqvLciiy3MmRp6dboyNuDRn28%2b9unL6YLrssgzySOKSHitGSyMTbhnub9sZ1uTRUm2poQ8dr7oVYhCCedl6DzyxNU81PQ0qU7MiyGNpZC3dR7j9hgiscswtYSM43I6HK6PKFurKJlHqnG0AfTnyvglKierp1ioCNo5CZgTGnki/vb8fXBGXUCSBa2sj3VDjdGri4hXsoHQG1rnrfEiXW/qI5Y00PJls%2byI07E8FC4kjqFl4jB5KhQJJTf3m3LB7G4ufHW%2bMy3uH4xpaQkCwFiRjsxKPs//2Q==\' /%3e%3c/svg%3e" width="1920" alt="So many wires" data-srcset="/assets/static/IMG_20150331_234750-w480.04f56d79b8ddb44b18830123e0546adb.jpg 480w, /assets/static/IMG_20150331_234750-w1024.04f56d79b8ddb44b18830123e0546adb.jpg 1024w, /assets/static/IMG_20150331_234750-w1920.04f56d79b8ddb44b18830123e0546adb.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/IMG_20150331_234750-w1920.04f56d79b8ddb44b18830123e0546adb.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/IMG_20150331_234750-w1920.04f56d79b8ddb44b18830123e0546adb.jpg" width="1920" alt="So many wires"></noscript></a>\n<em>So many wires</em></p>\n<p>Note that if you\'re using an older Raspberry Pi the same principle applies, but you\'ll have less pins in a different layout to work with. To work out what model you have, just count the pins! The new models have 40 pins, and the older ones have 26. Use <a href="https://www.raspberrypi.org/documentation/usage/gpio/" target="_blank" rel="nofollow noopener noreferrer">this pin out chart</a> if you have an older Raspberry Pi model.</p>\n<h2 id="configuring"><a href="#configuring" aria-hidden="true"><span class="icon icon-link"></span></a>Configuring</h2>\n<p>To make the arcade controls work once connected, you\'ll need to install the <a href="https://github.com/adafruit/Adafruit-Retrogame" target="_blank" rel="nofollow noopener noreferrer">Retrogame software</a>. This maps the signals your arcade buttons make to buttons on a keyboard. It can be a bit confusing to follow, if you need help look at the instructions on the Retrogame Github page.</p>\n<p>My plan was to use the GPIO pins for the arcade controls, but the kit I ordered came with a USB based encoder with all the necessary wires. USB arcade controller boards work great, and most gaming Operating Systems for Raspberry Pi have all the drivers for these kind of devices built in. If wiring the pins manually seems a bit confusing, it\'s worth looking into.</p>\n<p>I edited the configuration files on my Raspberry Pi to force it to output at a low, 640x480 resolution. This did slightly boost performance, but my main reason was to get crisp, sharp edged pixels for all the retro games. Having the Raspberry Pi run at the higher, native resolution of my monitor gave games a more smooth and scaled look. Try both to see what you prefer.</p>\n<p>There are many different operating systems for the Raspberry Pi that are great for an arcade system. <a href="https://learn.adafruit.com/cupcade-raspberry-pi-micro-mini-arcade-game-cabinet/hardware-setup" target="_blank" rel="nofollow noopener noreferrer">Cupcade</a> and <a href="http://www.recalbox.com/" target="_blank" rel="nofollow noopener noreferrer">recalboxOS</a> are common, but for my system I used <a href="http://blog.petrockblock.com/retropie/" target="_blank" rel="nofollow noopener noreferrer">RetroPie</a>. Installing it is simple, just plug your SD card into your PC and install whatever Operating System image you want. The <a href="https://github.com/petrockblog/RetroPie-Setup/wiki" target="_blank" rel="nofollow noopener noreferrer">RetroPie Wiki</a> has a great tutorial if you need more help with the installation process.</p>\n<p>A few things to keep in mind with RetroPie:</p>\n<ul>\n<li>You will need to configure your controller or arcade controls twice; for the EmulationStation menu where you navigate between your games, and again for the emulators themselves. Some emulators, like Nintendo 64, also need to be configured separately.</li>\n<li>RetroPie has a setup script that gives you access to some extra settings, including installing experimental emulators that are still in development. Access it from the RetroPie menu, but keep in mind you\'ll need to plug in a keyboard to navigate the options in the script. The Raspberry Pi also has a similar script for more core system features.</li>\n<li>You can access the standard Linux command prompt at anytime with F4. Because RetroPie is based on the very common Raspbian OS, most additions and tutorials written for the Raspberry Pi should work.</li>\n<li>By default, RetroPie runs a standard network share that lets you copy over files and games. It\'s called simply RETROPIE.</li>\n</ul>\n<p>There are a lot of free ports installed by default, including the shareware versions of Doom and Duke Nukem 3D. It\'s not an arcade style game, but the port of Cave Story works great. There is a huge range of homebrew games available for most retro systems; <a href="http://www.nesworld.com/article.php?system=nes&#x26;data=neshomebrew_bestof" target="_blank" rel="nofollow noopener noreferrer">nesworld.com</a> has a great selection and a favourite of mine is <a href="http://68000.web.fc2.com/felix/index.html" target="_blank" rel="nofollow noopener noreferrer">Fix it Felix Jr</a>. for the Genesis, based on the focus game in the Disney movie Wreck-it Ralph. As always, using copies of commercial games that you do not own is illegal and you\'re on your own to find them.</p>\n<p><a href="/assets/static/src/media/images/blog/IMG_20150422_135324.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1440\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-85\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-85)\' width=\'1920\' height=\'1440\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAwAEADASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xAAyEAACAQIEBAQEBQUAAAAAAAABAgMEEQAFEiEGEzFRQWFxgRQiQqEHIySRsTIzYsHh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIEAwD/xAAnEQACAgECBAYDAAAAAAAAAAABAgADERIxBAUiURMhkaGx0TNBUv/aAAwDAQACEQMRAD8AXsGTokaiKqYLJ8wCdN%2b3fFilyyhJkhEjNKt9RaSx9QDthqR8CUA0haWJNPTbp6YwuN%2bEKKi4Wraimp1WSDS9x4DUL/bEwRzu02NFn9QQbKaRUJetaJTY3aSMfydv%2b4pSw5TSg3zSl3%2bnmhj9treWB2LLFnqGeOBpYISGnKi2lCbX9MEAybLqZNb0tMgAJOolt/39cOyaN2PtDXU77NKk9XkbCRZcxDIN1EcLEk/tj2XJayGNZUiMsbDVbVvY9Nu9u2MzM4qWOevp4KBp5WAljmQkCNLddIHS%2bG7wlkQzHhfK6wTSa5qdGY2U32tbp02wWDDBX3jhH1YBzFfJQTabvFULcW%2bUWXbz9sVlpHMbENa49reh8sOyXhd1JdJFAPUaFtfFF%2bDGaQSFkDqLKRGPvtvgdZjaLMxqouxB0gdyeuMni6k%2bJ4ZzWEotnpntY9bC/T2xdSqD25ADE7C63PpbFXMWMkEkEj/M6spF7DcY1lOJ8nZs709RIiOV1AEgN19e%2bDyiElXSwujIBIocAW3FgSf5wG51l801SgijdnVijhUO2/W2DDLbw5bDQxxLqRbB5DZrA%2bAG/btgshcDEm/Gxg9xBzKbN4CKuSmp6qMLJIL7qCTaw3PXDm/BysWTgSjgZdXw0ssJ72Dkj7HA5lfCr5vWo%2batIUjIFwtrX3AFrnfbxw38qyXL6TKIqfL41ppIrq8bJy21f5Le9%2b564cUkKMxReFsIO/7kDVCG4WM2xCapSPlAHcEdMSSKadwkilH7je/ofHFeUxvqKm5HUEDGeMbytW1DInccUSWL81yR1aVh9gcRPCkbFqQGJ7E6lYi/%2b8cxxtoHNsfJemOyjAXNzfC5mgXvFbxFlU1DmHxNO55lyQ3g4P0t59jjd4S4cpq7LWrKeW8wDAK4tokt0YDzxv5lR/GRvEVXlH%2bq539sB/x1bwhWTSRx8yNwBZ9lkHh7jBrt8M4O0uu4ReZV6k8rR6MPv5jK4RoGybIKaGs5AqVj/PaPZNXiR5YyM/8AxFyzLS0OXfr6jp%2bWbRg%2bb%2bPtfC2qcyzziqTRUzlaYn%2bzGCsY9vq974Ici4VgjIaca3Hid8aNdk9Ikictrq6%2bKbU3YH5P16y3kefZxmmYvVZpIVg0FYoUGlEJI3t6eJ3wRoWIDgBr7dL4jipIkDxRrpstrAb3xNCoQhbnSPpOEz3nNpZukADsJ//Z\' /%3e%3c/svg%3e" width="1920" alt="I\'m gonna wreck it!" data-srcset="/assets/static/IMG_20150422_135324-w480.aac5c4788bf2b547ca9b059dde67d017.jpg 480w, /assets/static/IMG_20150422_135324-w1024.aac5c4788bf2b547ca9b059dde67d017.jpg 1024w, /assets/static/IMG_20150422_135324-w1920.aac5c4788bf2b547ca9b059dde67d017.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/IMG_20150422_135324-w1920.aac5c4788bf2b547ca9b059dde67d017.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/IMG_20150422_135324-w1920.aac5c4788bf2b547ca9b059dde67d017.jpg" width="1920" alt="I\'m gonna wreck it!"></noscript></a>\n<em>I\'m gonna wreck it!</em></p>\n<h2 id="final-thoughts"><a href="#final-thoughts" aria-hidden="true"><span class="icon icon-link"></span></a>Final Thoughts</h2>\n<p>This took longer to do than I expected. Planning, cutting and configuring was a fairly large task that I thought I\'d do in a few hours, but ended up doing over a few free afternoons. The final unit is also far heavier than I would have liked. All advice and research was to use 12mm material, but I\'d consider going thinner and lighter if I did it again. By far the best thing about building something like this is the huge community around both the Raspberry Pi and the whole maker scene. If you get stuck or lost there are several communities where you can research and even ask for help.</p>\n<p><a href="/assets/static/src/media/images/blog/Legendary.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 1504\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-87\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-87)\' width=\'1920\' height=\'1504\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABQcABgMECAL/xAAxEAABAwMDAQYFAwUAAAAAAAABAgMEAAURBhIhMQcTIkFRYQhCcYGRFKGxFSOC0dL/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQFAAH/xAAqEQACAgEDAQYHAQAAAAAAAAABAgADEQQhMQUSMkFhcfATM1GBkbHB0f/aAAwDAQACEQMRAD8Abcrtz0DEmOxZN5W062ooVmK6QCDg8hJ9KTnxB6nsOpYtvv2k7muQtt79Ot5pTjZQdpOMHGOiarF57D9ZTdWzpKLfGdtj01x0KRPZBU2pwkeeRwfTP3ofqbR1z0lo24RbtCEMGeh%2bOgyEOlTZ8O7KSf3q5agmSv0iDYjYII5h3Tmn9fy7PDuNn1XOQxIQlaAJb3GfI9enQ1sXCB2pTY6IknURmMFSXUpekBQ3IOQclOcgjNM/sPDT3ZhZV98rcneCnbnkLIx%2b1WZ%2b0stkPKdCG0rOCoADxHgZPucVIWPjKgVHEQZj9qVvIUEw5B8sqbP%2bqN9luprtqJ67ovamkPQlpZLLbQTgndkk/wCOMU3pNmeCAAgnBPOMUpdGRG7brXVMcJ2Oqd3KHr4z/wBUmxFC5AjksLHBMvDmMVpyHA2nJrZcVxxQq6OYRipjKl5nK7jz0fA/qchAPo6rn968yn5KXmUPy5DyVDjvHCoY59aJXVxOpe7btbJSWSStbyktpAP1NCbxHdgPQw8tpwpR1bVuHFWfEbOMyDsV4J7I2nXXwuS0y9DNRF7D3UmQnaRz1Qr%2bFU0NbWpMjT7g2klDiFBA43HdwPbkg59q497MO11rs/hupZsaLjKU4XmXnJCmQ2FICVDaAd2cVdmvid1RcZYYh2ayx0n5nFOKx7ZyOftTBYEOYtKbLmKKNydvfrOlk2ttVtZcbLoUWkqylZBJxnpSOnREwu1K6OZXulNBwhXXxIQoUvJvxJa5mOlmGiCys5ACGgo8fWgMHXWprxdxqKYpmbKa8DreAC4kpIGAk5wADkgccUt9wYyoYbGdxHy45xQS7PDPWhem9ZW7ULYSwvuJgGVRnSN31SfmH0/AqXeQAlaiegJqFjjmaCTm2LIQh1PfKdSgkB1beNxT6D8VYbgLbdoKXbbG7pMdAbdQpRKx6KPrWnH0ddV8vhhlPmVvDI/FWLT9iYs0h5%2bZcGHA4gtltPTGfM0Go1darlGyfLeDotO62ZdNjzmL16Ktt4IGMKOEkkAfc%2bVYUKUnoTVqvbENE5bTC0utK5GD0Hp9q0RZkF5RDm1BPAAziqK9QpUFto6zpNjvnT7j9QO0jc94MhAOQT1qwOXmYqV35lLQ%2bceJo7DkDbnCcc4496zR7RHBxsW4fc1Z7NpKVNYQ8w0wwwrotRxkfQc0DahSdhkyqvo70rm60ID78pTGVSd6VsIdCgchY8OD6g0w4F4nv6OlvXN3vH0bm0r%2bYjAxk%2bZ561vtaNjMI3S5TjpHytjaPycmhOqkswbMmLFTsbW6BjOc85P8UDWFtiIL06asYqYsfwJQ35L6lYU86R7qNYSSoeI5%2btSpXtHEju5mEcTGsUamqUiMooJSfUHFSpXX94TZ6N8l5XVOLOSVqJPU5roHTvFig44/tipUryzvL9/5MtuW9f8AZnnE9yeaXeticxRk47w/walSg8Zycif/2Q==\' /%3e%3c/svg%3e" width="1920" alt="MegaMan Legends 2 running perfectly" data-srcset="/assets/static/Legendary-w480.85c8c8a9ee6c2448d73657a3acf73d8a.jpg 480w, /assets/static/Legendary-w1024.85c8c8a9ee6c2448d73657a3acf73d8a.jpg 1024w, /assets/static/Legendary-w1920.85c8c8a9ee6c2448d73657a3acf73d8a.jpg 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/Legendary-w1920.85c8c8a9ee6c2448d73657a3acf73d8a.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/Legendary-w1920.85c8c8a9ee6c2448d73657a3acf73d8a.jpg" width="1920" alt="MegaMan Legends 2 running perfectly"></noscript></a>\n<em>MegaMan Legends 2 running perfectly</em></p>\n<p>An alternative to an arcade machine is building a handheld Gameboy-like system powered by a Raspberry Pi. Adafruit has <a href="https://learn.adafruit.com/pigrrl-raspberry-pi-gameboy?view=all" target="_blank" rel="nofollow noopener noreferrer">a guide here</a>, and the (now former) Fragdoll Sabre has <a href="http://www.google.co.nz/url?url=http://www.youtube.com/watch%3Fv%3DRXpgLFpSBHY&#x26;rct=j&#x26;q=&#x26;esrc=s&#x26;sa=U&#x26;ei=Zgk3VcyWAcHOmwWW0YHYDw&#x26;ved=0CBYQtwIwAA&#x26;sig2=9n0_thEx4P5EhIFahjzRTg&#x26;usg=AFQjCNHWo8P5VgI5-VZ0p7___LKQA-7CRg" target="_blank" rel="nofollow noopener noreferrer">a great video breaking it down</a>. Most smaller projects like this require a 3D printer - if you\'re interested in this it\'s worthwhile to research if there is a maker space or other community centre in your area that will let you print out your parts.</p>\n<p>Another retro gaming project would be to gut out the inside of a broken Super Nintendo or Genesis and turn it into a neat case for a Raspberry Pi PC. You can also buy a huge range of different cases premade for the Raspberry Pi or make one yourself with your own stylish finish. Just about any USB controller will work, including wired Xbox 360 controllers and wireless Playstation 3 controllers if you use a USB Bluetooth adapter.</p>\n<p>If you\'re after a different type of project, <a href="https://learn.adafruit.com/" target="_blank" rel="nofollow noopener noreferrer">Adafruit has guides</a> for a huge range of guides. It\'s also the store I\'d recommend to buy all your parts and Pi\'s, including joysticks and buttons. They\'re based in New York, so if you are in North America you won\'t have to wait weeks for shipping from Asia.</p>\n<p><a href="/assets/static/src/media/images/blog/moneyshot.jpg"><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1452 1284\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-88\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-88)\' width=\'1452\' height=\'1284\' xlink:href=\'data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAA5AEADASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAABgcEBQgCAAMB/8QAPBAAAQMDAgMFAwkHBQAAAAAAAQIDBAAFERIhBhMxByJBUXFhscEUFTIzUoGRkqEWIzQ3QkNyc7LR8PH/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBQT/xAAoEQACAQMCBQMFAAAAAAAAAAABAgADBBEFMRIhQVGxIoGRBkJhcfD/2gAMAwEAAhEDEQA/AI8jtJuUVZefcb5KUZKAgb%2byrQdoUmRbhIMRtOVgAaj0pU3yW4qJDRzkFbi06wADp/GjSNFedsjDLLYW6UpOnQM5zmmAmUyiEUjjJ9am1LZSlsddJ3PkBmrOz9o9ij3WCiStyKQ8jmOPOJCUb7k70uOJHizaJTTzTepLRBSU%2bPSljNj8h5ITyxqbQ5ujJBUnOP1FFxGUqAx28TdoPDk7gniu3JnJTKkyGDGb0lXNCFkqUCBgDHmaSL92iIPR1XonFQH9Sj3nFH2AAVHcTqPeKj6mlsobePVygwJcW7iUw58eVEj5dYcS6jWdsg5FaouNvXHhw03qOsT3YjbjyY6ytC1HHeTgApBOcpPTzNZBioSZ8RsDAW6lJ%2b9QFbI4nvMa7zlPRnlpaajIbCmxk7K6dDUAA5CCzFiMzO0KC2hiDLdW68spQshZyAfHAo7%2bXyBb3H47jjRUkqSehxVTZLBdlRYzRZipLAAyl8K1YPXbpRCeGbxMZU1zEoKwU9zKiPT/AMqLBeBvGs2TLtAW85q1YSMADO%2bfhQNeV5uMgfYIb/KkJ%2bFHvHPDdwsbdrbuEiUtuTICUJdb0J2xnGwz9KlpNfD0h53I/eOKX181E1ZhKJHWcmvmqusjzrlSsVJDPyKspusQjBKVBXTPQ5%2bFP3srmPS7Nci4%2bG16salDPkcUjeHYhk39gEd0gn8EmnjwQTbrS%2b8yUhlxwp5mklIUMZBPT9akrE0dFbs8cZjQ4SMeKGk/AVW3PjuBA1NRGzIdGRhoAIB8irPuBNJjibtJ%2bd%2bH34kdh%2b3yHwOW4levooHY%2bWx8KXvz5fmThF0SoDoHY6D7gKUbhFPrM0rbRru6QvQXPTcQ%2b7ZLzcOILcl94RCpAU22OT9Vkg6kq6hWw38aSNttt9vV2ei2lLklSEF0g6QlLY6qOo%2bHlknyoquE28XiOhmYLfIbQsOY5a0ZI9FUM3a33B2QtxDDbZPg06R7xVNWQglDg/mOfSNQChHpHl2A8jeW1t4K4lvUtTEH5CptGFLklvQ2hognmqUUbI2I33z4ULT0twlzosl5t%2bdHeLSFMIQtlwA4JCsZPsrpDd6iIdbYXKbbdRy1pQ6cKT5EA9KNOD%2bFYRiJky3g8sKCxpb0lCikZTk77Zx67iiatTIBB%2bINto93UqmmtM7fcMY6Z6D4HtK7ha0lqSzIXzDJWjHJCANGeo2/76Uy7fwk9cmgJanoyBnG6EoTnzz41Z2WLDtsZTyG2mEJGSojf7z1NS23FlCX3Ekrc7wTy8lI8Bk7UsVix5TtudEWzpFqj5bt/bxEXuc5FuD6X9QSlelC0jugDoBjpgV5hU%2bTG50WQUtAZU4pWUj2b18OMv7n%2bur/AGirdr%2bX8b0HvqmQYmfZ3NUNwqxH6OPEGf2hukV/RzGnU/aLeM/hiprfEz6yOfFCvMocx76pJf1ldN9KBqSEbTVpare0m9NU%2b%2bD5zCNF8jqKUuMPoKumwPxo44DkRJnNb%2bWR2loOvEhwNgDAyd%2btLNP1Q9BXv6aUKKA5E0E%2boLx0IJGe%2bJpWFHhMFDqnjLcT9FSR3E%2bhOw9cE%2b2pClS5r4TCj79ApA1K/Men3YpYdl/8O7WheH/oMf4f810oJgXdZieNzknvP//Z\' /%3e%3c/svg%3e" width="1452" alt="Red and Black" data-srcset="/assets/static/moneyshot-w480.5967f39b44c22e8abb0d005ddfbb4ee5.jpg 480w, /assets/static/moneyshot-w1024.5967f39b44c22e8abb0d005ddfbb4ee5.jpg 1024w" data-sizes="(max-width: 1452px) 100vw, 1452px" data-src="/assets/static/moneyshot-w1024.5967f39b44c22e8abb0d005ddfbb4ee5.jpg"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/moneyshot-w1024.5967f39b44c22e8abb0d005ddfbb4ee5.jpg" width="1452" alt="Red and Black"></noscript></a>\n<em>Overall, I\'m pleased. It\'s my first time building something like this and it came out reasonably well. The paint finish might be a bit patchy and it\'s very heavy, but it is fully functional. I still wouldn\'t call it fully finished as I\'ll probably try and touch up a few things when I get the spare time. And then there is my next project - mounting a Raspberry Pi and a small touch screen in the dash of my 1983 Toyota.</em></p>\n<p>If you have any questions or suggestions please comment below or hit me up on <a href="https://twitter.com/aaronights" target="_blank" rel="nofollow noopener noreferrer">Twitter</a>. If you\'re attempting a project similar to this I\'m happy to help out if you have any specific questions.</p>\n',date:"2015-04-22T12:00:00+12:00",timeToRead:1}}}}}]);