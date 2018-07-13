var Questions = [
	{
		question: "What are the required components for a computer to run?",
		answers: [
			"All of them!",
			"Motherboard and CPU",
			"Power Supply, RAM, CPU, and Motherboard",
			"CPU, Power Supply, RAM, Hard Drive, Keyboard, and Monitor",
		],
		correct: 2,
		defaultAfterText: "Very few pieces are actually required!",
		afterText: [
			"Nope, this isn't a trick question!",
			"Almost there, but not quite!",
			"Bingo!",
			"You don't actually need I/O Devices, nor storage!",
		]
	},

	{
		question: "The very first program to run on a computer is called what?",
		answers: [
			"Power On Self Test (POST)",
			"Basic Input/Output System (BIOS)",
			"Bootloader",
			"Operating System (E.g: Windows, Linux, MacOS)",
		],
		correct: 1,
		defaultAfterText: "The BIOS gets loaded and ran, performing the POST followed by booting into the OS via the bootloader!",
		afterText: [
			"Actually, the POST is part of the BIOS!",
			"Yep! The BIOS will run the POSt and then boot into the OS via the bootloader.",
			"The bootloader gets ran after the BIOS finished the POST!",
			"There's a lot that has to happen before the OS can start.",
		]
	},

	{
		question: "RAM stands for what?",
		answers: [
			"Really Accurate Memory",
			"Random Access Memory",
			"RAID Memory",
			"Randomly Asserted Memory",
		],
		correct: 1,
		defaultAfterText: "RAM stands for Random Access Memory",
		afterText: [
			"It tends to be, but it's actually \"Random Access\" memory!",
			"Not to be confused with Daft Punk's \"Random Access Memories\"",
			"Not at all!",
			"Close, maybe you misremembered?",
		]
	},

	{
		question: "What can RAID (Redundant Array of Independant Disks) configurations NOT do?",
		answers: [
			"Make multiple hard drives appear as one in the OS",
			"Back up important data",
			"Improve performance of multiple-hard-drive systems",
			"Maintain 100% uptime of server systems",
		],
		correct: 3,
		defaultAfterText: "RAID configuartions combine multiple physical drives into a single \"logical\" drive.",
		afterText: [
			"That's the entire point of RAID!",
			"RAID-1 involves duplicating hard drives, perfectly backing everyhting up.",
			"RAID-0 involves \"merging\" hard drives into a single unit as far as the OS is concerned, typically speeding up access times.",
			"Bingo! RAID has nothing to do with uptime, at least directly!",
		],
	},
];

function RandomizeQuestions() {
	// TODO if I have time :S
}