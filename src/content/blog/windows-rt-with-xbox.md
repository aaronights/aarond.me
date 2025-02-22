---
title: "Windows RT with Xbox"
date: 2012-11-06
---

There has been a recent buzz stating the Microsoft is prepping a tablet device with Xbox functionality. It's currently unknown if such a device would be an Xbox 360 compatible device, or just a gaming focused tablet using Xbox branding. I have long been pondering how such a device would be crafted. I've written down my unedited thoughts covering the technological side of such an implementation, divided up into four points:

## Hypervisor

When the Xbox 360 was developed almost eight years ago, there was a lot of thought put into the implementation of a Hypervisor. The hypervisor is something that sits between the hardware of the Xbox 360 and the software that runs on it. Basically, when you start a game or other program on the 360, it does not take control of the consoles hardware. Rather, the hypervisor acts as a liaison providing  API's or 'hooks' for games that are then executed onto the processors in the Xbox. The Xbox 360 was the first home console to implement something like this, and it shows remarkable forethought. If Microsoft were to put full game functionality into another device, it wouldn't have to replicate the full suite of hardware from an Xbox 360, it would just have to offer the same hypervisor controlled environment. Sure - it's not an easy task, and would require a significant investment in development and software engineering - but it still means that the same power hungry, 3 core PowerPC processor wouldn't necessarily need to be used. Using the same hypervisor technology would also provide security.

## The Disc

As you might have heard from your console making the sound of a small aeroplane, the Xbox 360 spins its discs very fast. While this is fine in a console, if a tablet or laptop device were to use the same optical media it could be an issue. No slim or low power optical drives operate at anywhere near the speed that 360 games require. If one were to be made, it would be very troublesome. Having such a slim drive spin that fast would make it very prone to skips and jumps from even the slightest bump. Microsoft has been increasing its Games on Demand offerings, but it has still yet to offer day and date digital releases. Storage size would been a problem too - if you were to load up all your games digitally, the 32GB of flash offered up in most tablet devices would very quickly prove insufficient. A possible solution might be to use a slow and slim optical drive and simply require that all games be Installed. It might take a while to run the installation, but then the disc drive would only be needed for authentication and not any rapid data streaming. To make the device even slimmer, an external optical drive could be used, perhaps one that can physically 'clip' on to the back of the tablet. While the data storage limit would still be an issue, this method would allow consumers to have access to their current catalog of games without hindrance. The storage size could be resolved by more traditional means. Archos, a small French manufacturer, has also released various tablets with 1.8-inch sized micro Hard Drives, similar to those used in Apple's iPod Classic. While using such a hard drive would wouldn't have the same advantages in size, power use and speeds as flash, it would allow for higher capacities without extreme cost.

## Power and Processors

The current Xbox 360 slim model uses 135 watts of power, something that would be unfeasible to run off anything smaller than a car battery. Having such a power hungry device also produces a lot of heat, meaning that extra bulk would be needed to keep the device cool. With every iteration of the Xbox 360, Microsoft has managed to reduce its power consumption and shrink the size of the processor die. The next step might be similar to what Sony did with the last generation of it's Playstation 2 slim - put an entire Xbox 360 onto a single, small chip. This single chip could run in tandem with the current ARM processor used in the Surface, allowing full Windows RT and Xbox 360 functionality in tandem. Doing this wouldn't need more power usage - one would halt while using the other.

## The interface formerly known as Metro

The interface for such a device would by far be the easiest piece of the puzzle. The latest Xbox 360 dashboard looks identical to the interface used in Windows 8. Implementing Xbox 360 functionality could be as easy as putting an Xbox tile onto the home screen. If the dual processor method is used, it would also be possible to expand the Guide button use to allow use of the Windows RT functionality while an Xbox 360 game is simply paused in the background.

What are your thoughts on a potential Xbox 360 tablet? I'd very much be interested to hear them in the comments.
