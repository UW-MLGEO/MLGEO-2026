---
title: Syllabus
date: 2025-01-05
draft: false
toc: true
tocBorder: true
---

## Logistics

Instructor
: Akshay Mehra / JHN 245 / akmehra [at] uw.edu

Teaching assistant
: Henry Yuan / JHN 265 / hdyuan [at] uw.edu

Office hours 
: Fridays from 10:00 to 12:00 (Henry; JHN 241) 12:00 to 13:00. (Akshay; JHN 245)

Class times and locations
: Lectures are on Mondays, Wednesdays, and Fridays from 13:30 to 14:50 in JHN 111.

## Description

Given the geosciences' central focus on \ul{evaluating Earth data}, artificial intelligence (AI) and machine learning (ML) is likely become ubiquitous across *all* sub-disciplines of the field. Therefore, it is important for geoscientists (of all stripes!) to figure out how to:

1. Apply AI/ML (as *tools*) to their area(s) of expertise. 
2. Critically evaluate AI/ML applications.

To these ends, this course seeks to introduce individuals to the fundamentals of AI/ML via a combination of lectures and experiential learning (including a term-long group project).

## Objectives

I have designed this course to teach you how to *think about the use of AI/ML for discipline-specific applications*. By the end of the quarter, you will be able to:

1. **Determine the correct approach for the question you would like to answer.** 

    *If, for example, a PCA provides enough separability to answer a given question, there is no need to build a whole Random Forest classifier (i.e., your goal **should not** be to find the most complex approach to your problem).*

2. **Compile, clean, and characterize data so that you can run it through your AI/ML application of choice.**

3. **Interpret model outputs and soberly assess uncertainties and limitations.** 
   
    *Too many people give breathless talks about the incredible accuracy of their models without appropriately benchmarking or assessing limitations. It is critical that you understand what your AI/ML implementations can (and cannot!) do.*

4. **Communicate your AI/ML work in a clear and engaging manner.**

Beyond these shared objectives, there are several 469- and 569-specific goals:

As a student in **469**, you will be able to:

1. **Produce figures that clearly communicate the statistical properties of data or analyses.**
2. **Read scientific literature on AI/ML in a structured and efficent manner.**

As a student in **569**, you will be able to:

1. **Lead a team implementing an AI/ML application.** 
2. **Make a detailed plan for using AI/ML in your graduate research (and beyond!).**

## Prerequisites

MATH 207 and MATH 208, or MATH 307 or 308, or AMATH 351 or 352, CS160 or CS163, *or* permission from the instructor.

## Schedule

| Week | Date                   | Topic |
|------|------------------------|-------|
| 1    | Monday,  January 5     | An introduction to the course. <br /> *In-class assignment: A short survey* <br /> *Project assignment: [Introduction slides](/assignments/introductions).*    |
|      | Wednesday, January 7   | Setting up a programming ecosystem and best practices for software development.       |
|      | Friday, January 9      | **Student introductions.**      |
| 2    | Monday, January 12     | Data: Types, formats, and availability.  <br /> *Project assignment: Assembling a group and setting up a question.*      |
|      | Wednesday, January 14  | Data: Access, storage, and management.      |
|      | Friday, January 16     | Characterizing data (including statistical properties and visualization). |
| 3    | Monday, January 19     | *No class on account of Martin Luther King Jr. Day.* |
|      | Wednesday, January 21  | Filtering and resampling. |
|      | Friday, January 23     | **Project presentations: Questions and associated data sources.** |
| 4    | Monday, January 26     | Dimensional reduction (e.g., via cross-correlations and PCA).  *Project assignment: Exploring available data.*    |
|      | Wednesday, January 28  | Fundamental concepts in AI/ML.  |
|      | Friday, January 30     | Clustering (e.g., k-means).  |
| 5    | Monday, February 2     | Classification (both binary and multiclass).  |
|      | Wednesday, February 4  | Random forests and ensemble learning.     |
|      | Friday, February 6     | **Project presentations: Data exploration.**     |
| 6    | Monday, February 9     | Logistic regression and an introduction to gradient descent. *Project assignment: Outlining an AI/ML approach.* |
|      | Wednesday, February 11 | Model training.      |
|      | Friday, February 13    | The perceptron.  |
| 7    | Monday, February 16    | An introduction to neural networks. <br /> |
|      | Wednesday, February 18 | Convolutional neural networks.  |
|      | Friday, February 20    | **Project presentations: AI/ML implementation plan.**      |
| 8    | Monday, February 23    | Recurrent neural networks. *Project assignment: An initial presentation draft.*       |
|      | Wednesday, February 25 | Physics-informed neural networks.      |
|      | Friday, February 27    | **Project presentations: The elevator pitch.**      |
| 9    | Monday, March 2        | Evaluating machine learning performance.      |
|      | Wednesday, March 4     | Assembling a machine learning application from start to finish (including transfer learning).      |
|      | Friday, March 6        | Large language models.      |
| 10   | Monday, March 9        | Foundation models. |
|      | Wednesday, March 11    | **Project presentations: Final presentations, Part I.** |
|      | Friday, March 13       | **Project presentations: Final presentations, Part II.** |


## Materials

### Textbooks

There is no *physical* textbook for this course. Instead, we will reference (and wherever necessary, modify/update) an [online, open-source curriculum book](https://geo-smart.github.io/mlgeo-book/).  

Additionally, I will assign papers for you to read and then report on.

### Technology

As part of this course, you will need to write and run code, both in and out of the classroom. Therefore, I recommend that you bring a personal laptop to each class session. While you *could* use a tablet, doing so may pose technical difficulties. If you do not have a laptop, you should consider borrowing one from the [Student Technology Loan Program (STLP)](https://stlp.uw.edu).

Since we will be using a University-provided Jupyter Hub instance for programming, your laptop (or tablet) does not need to be "powerful". That is to say, as long as your device can a) connect to the internet and b) open text files, it will suffice for the purposes of this course.

Any software we will be using in class will be free, open-source, and platform-independent. 

## Use of generative AI, such as ChatGPT

In this course, you **can** use AI as a programming tool. However, you **cannot** use AI as replacement for critical thinking. Furthermore, it is **unacceptable** to treat generative AI as an authoritative source (e.g., saying or writing "ChatGPT said XYZ..."). 

Examples of acceptable uses of AI include:
- Implementing code with agents.
- Debugging or understanding your codebase.
- Doing a literature search (note that you still have to read any paper that you cite).

Examples of unacceptable AI use include:
- Generating writing (even as a starting point!).
- Using outputs without verification.

*If* you use generative AI, you should a) acknowledge that fact somewhere (i.e., "Code in this repository was generated using Claude") and b) provide me with a ```AI.md``` file that documents your use of AI (including any prompts you used). 

## Grading 

### 469

| Element | Percentage |
|---------|------------|
| Readings | 25% |
| Homework | 20% |
| Final project | 35% |
| In-class assignments | 20% | 

As a student in 469, you will be a *member* of a team working on a AI/ML application. 

### 569

| Element | Percentage |
|---------|------------|
| Readings | 15% |
| Homework | 20% |
| Final project | 45% |
| In-class assignments | 20% | 

I expect students in 569 to *lead* teams for the final project. 

## Late work policy

I will deduct 25\% of an assignment's total point value for every day it is overdue. 

That said, <u>you will have three free late days</u>, which you can distribute as you see fit (e.g., you can turn in one assignment three days late or three assignments each one day late). 

If you have a known conflict that will make completing an assignment impossible, please me well in advance of the due date. I *will* work with you to find a solution.

## University policies and student support

### Disability access and accommodations

*Note that this language is taken directly from the Disability Resources for Students website.*

Your experience in this class is important to me. It is the policy and practice of the University of Washington (UW) to create inclusive and accessible learning environments consistent with federal and state law. If you have already established accommodations with Disability Resources for Students (DRS), please activate your accommodations via myDRS so we can discuss how they will be implemented in this course.

If you have not yet established services through DRS but have a temporary health condition or permanent disability that requires accommodations (conditions include but not limited to; mental health, attention-related, learning, vision, hearing, physical or health impacts), contact DRS directly to set up an Access Plan. DRS facilitates the interactive process that establishes reasonable accommodations. Contact DRS at [disability.uw.edu](https://disability.uw.edu).

### Religious accommodations

Washington state law requires that UW develop a policy for the accommodation of student absences or significant hardship due to reasons of faith or conscience or for organized religious activities. The UW's policy, including more information about how to request an accommodation, is available [here](https://registrar.washington.edu/staffandfaculty/religious-accommodations-policy/). You must request accommodations within the first two weeks of this course using the [Religious Accommodations Request Form](https://registrar.washington.edu/students/religious-accommodations-request/).

### Academic integrity and student conduct

Academic honesty is vital to our scholarly community. The UW's Student Conduct Code (WAC 478-121) defines academic misconduct and outlines prohibited behaviors. <u>All work you submit must be your own, original work (or properly cited).</u> Cheating, plagiarism, and other forms of misrepresentation are serious offenses. Examples of academic misconduct include, but are not limited to: cheating on exams or assignments (e.g. using unauthorized notes or online answers), plagiarism (presenting someone else's work or ideas as your own without credit), unauthorized collaboration on individual work, falsifying data, or submitting the same work for multiple classes without permission. Uploading or sharing course materials or assignments to third-party study sites (e.g., Course Hero, Chegg) without instructor permission is also considered academic misconduct.

By being enrolled in this course, you are expected to uphold these standards of integrity. If you are unsure about whether something might violate academic integrity, please ask me before proceeding. Any suspected cases of academic misconduct will be handled in accordance with UW policies and the College of the Environment's procedures. 
 
### Use of course materials and copyright

I provide course materials (lecture slides, notes, recordings, assignments, exams, etc.) for your personal use. <u>Please do not share or post any course materials online outside our class without explicit permission.</u> These materials are protected by U.S. copyright law and by University policy. This protection means you may not reproduce, distribute, upload, or sell class materials (including your own completed assignments or exam questions) on sites like Chegg, CourseHero, or public repositories. Unauthorized distribution of course content may violate academic conduct rules and may result in University disciplinary action. Sharing your own study notes with classmates is fine; posting instructor-provided materials to a public forum is not.

### Title IX and preventing sexual harassment

The UW is committed to a safe, equitable environment for all students. UW prohibits sex discrimination and sex-based harassment in any form, including sexual assault, relationship violence, stalking, sexual harassment, and discrimination on the basis of sex or gender. Respect for one another is expected at all times in this course. If you or someone you know experiences sexual harassment or assault, know that resources and help are available. You are encouraged to reach out to the UW Title IX Office or a Title IX case manager. To do so, you can make a report at [titleix.washington.edu](https://titleix.washington.edu) or email [titleix@uw.edu](mailto:titleix@uw.edu). They can connect you with support resources and explain options for reporting and resolution.


