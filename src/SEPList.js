var SEPs = [
  {
    code: 'IEP',
    name: 'Initial Enrollment Period',
    description: [
      'This enrollment period is for Part D coverage (MAPD or PDP),  not MA-only.  The total enrollment period is seven (7) months beginning three (3) months before the effective date of Medicare Part A and B, includes the month Medicare begins, and continues for three (3) additional months',
      'If enrollment is during the three (3) months   before the Medicare effective date, the plan effective date will be the first of the month that Medicare is effective; otherwise, the plan effective date will be the first of the month following plan enrollment.',
      'IEP is also used for an individual who has resided out of the country during the period of their original Medicare eligibility and is now moving back to the U.S./U.S. Territory, is getting Medicare A and B and wishes to enroll in a MAPD or PDP.'
    ],
    timePeriod: [
      '3 months before part A and B effective Date, month of effective date and 3 months after effective date (3-1-3)'
    ],
    enrollMA: false,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'ICEP',
    name: 'Initial Coverage Enrollment Period',
    description: [
      'ICEP is for Medical-only coverage (MA-only), not MAPD or PDP'
    ],
    timePeriod: [
      'Same part A&B: 3 months before part A and B effective Date, month of effective date and 3 months after effective date (3-1-3).',
      'Delayed Part B: 3 months prior to effective date'
    ],
    enrollMA: true,
    enrollMAPD: false,
    enrollPDP: false
  },
  {
    code: 'AEP',
    name: 'Annual Enrollment Period',
    description: [
      'During AEP, beneficiariesmay choose how they receive their Medicare benefits for the upcoming year.',
      'The last election made, determined by the application date, will be the plan that takes effect on January 1.',
      'The Annual Enrollment Period is open for all plan types:  MA, MAPD and PDP, but excludes Medicare Supplements.'
    ],
    timePeriod: ['10/15 - 12/7'],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: '(MA) OEP',
    name: 'MA Open Enrollment Period',
    description: [
      'Beneficiaries already enrolled in a Medicare Advantageplan(MA/MAPD)may make one plan change during the first three (3) months of each year (1/1-3/31) to enroll in another Medicare Advantage plan OR to disenroll to obtain Original Medicare (and get a PDP).',
      'The effective date will be the first day of the month following receipt of the enrollment or disenrollment request. MA/MAPD member NOT required to have made an election during AEP.',
      'ONLY MA/MAPD -> MA/MAPD (not original medicare -> mapd nor pdp -> pdp'
    ],
    timePeriod: ['1/1 - 3/1'],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: false
  },
  {
    code: 'MA OEP-New',
    name: 'MA Open Enrollment Period-New',
    description: [
      'OEP but for people who enrolled in a plan during their IEP, NOTE:  Beneficiaries who wait to use their IEP/ICEP until the month of their Medicare effective date or later during that initial seven-month window will reduce or even forfeit their OEP.'
    ],
    timePeriod: [
      'The month of Medicare entitlement and for 2 additional months following IEP/ICEP enrollment into MA/MAPD'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: false
  },
  {
    code: 'OEP-I',
    name: 'Open Enrollment Period-Institutional',
    description: [
      'This is an open and unlimited use enrollment period for Medicare beneficiaries residing in an institution lasting for up to two (2) months after leaving the facility.',
      'An “institution” is defined as a skilled nursing facility, nursing home, intermediate care facility for the mentally disabled, psychiatric hospital, rehabilitation hospital or long term care hospital (it does NOT include assisted living facilities or residential homes). '
    ],
    timePeriod: ['up to two (2) months after leaving the facility.'],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: false
  },
  {
    code: 'MOV',
    description: [
      '1) SEP available for permanent change of residence',
      'May enroll in any plan for which the beneficiary is eligible in the new service area, regardless of coverage in former service area.',
      'Individuals who move and have new Medicare health or Part D plans available to them as a result of the move, but continue to reside in the current plan service area, may use this SEP to enroll in a different plan.',
      'Zip code or county must change.',
      '2) SEP begins on the start of the 6th month that the beneficiary has been out of the service area and continues through the end of the eighth month.  Plan learns beneficiary has moved and the member has been disenrolled.  SEP begins the month notification is received and continues for two additional months.  Notification may be in the form of a letter or upon realization that disenrollment has occurred.',
      '3) Member notifies plan that they moved or have been out of service area for 6+ months and have yet to be disenrolled'
    ],
    timePeriod: [
      'the month prior to the permanent move and up to 2 months after the move.',
      'the applicant may choose an effective date of up to 3 months after the month in which the enrollment form is received but the effective date may NOT be earlier than the date of permanent move.',
      ' When an individual notifies the plan of a future move date, the SEP begins the month before the individual’s permanent move and continues for two (2) additional months.',
      'When an individual notifies the plan of a past move date, the SEP begins the month the individual notifies the plan and continues for two (2) additional months.',
      'The member will be disenrolled from their plan at the end of the current month and will revert back to Original Medicare if they do not enroll in a new plan to be effective the first of the upcoming month.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'RUS',
    name: 'Relocation to the US',
    description: [
      'Individuals who were not eligible for a MA or PDP because they had been out of the U.S. and have now moved back'
    ],
    timePeriod: [
      'The SEP begins on the actual date of the move or with the date the individual provides notification of such move and continues for two additional calendar months. '
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'INC',
    name: 'Incarcerated',
    description: ['Individuals who were incarcerated and now have released'],
    timePeriod: [
      'The SEP begins on the actual date of the release from incarceration or with the date the individual provides notification of such move and continues for two additional calendar months.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'LEC',
    name: 'Loss of Employer Coverage',
    description: [
      'This SEP is for individuals who are losing group health coverage(including COBRA).',
      'Losses include the individual opting out of the Company/Group coverage during the employer’s annual benefit selection season, changes due to life events and discontinuation of employment or the Company/Group ceases to offer group health coverage.'
    ],
    timePeriod: [
      'The individual may choose a plan effective date up to 3 months after the month in which the individual completed the enrollment request.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'LCC',
    name: 'Involuntary Loss of Creditable Prescription Drug Coverage',
    description: [
      'Involuntary loss of creditable coverage, including a reduction in the level of coverage so that it is no longer creditable, NOT including any loss or reduction due to a failure to pay premiums'
    ],
    timePeriod: [
      'Begins with the month in which the individual is advised of the loss of creditable coverage and continues for two additional calendar months after either the loss (or reduction) occurs or the individual received notice, whichever is later',
      'The effective date of this SEP may be the first of the month after the enrollment or, at the beneficiary’s request, may be effective no more than three (3) months in the future. '
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'OCC',
    name: 'Other Creditable Coverage',
    description: [
      'Individuals who disenroll from Part D to enroll in or maintain other creditable coverage',
      'Individuals enrolled in a PDP or MAPD who have or are enrolling in other creditable coverage such as Tricare or VA coverage may use this SEP to disenroll from the PDP or MAPD by enrolling in an MA-only plan.',
      'Individuals who have submitted a written request to disenroll from a Part D plan (PDP or MAPD) to enroll in or maintain other creditable drug coverage (such as Tricare or VA coverage) will have two months following disenrollment of MAPD/PDP to select a MA-only plan.'
    ],
    timePeriod: [
      'Individuals who have submitted a written request to disenroll from a Part D plan (PDP or MAPD) to enroll in or maintain other creditable drug coverage (such as Tricare or VA coverage) will have two months following disenrollment of MAPD/PDP to select a MA-only plan.'
    ],
    enrollMA: true,
    enrollMAPD: false,
    enrollPDP: false
  },
  {
    code: 'NON',
    name: 'Contract Not Renewed',
    description: [
      'Contract Non-Renewal for plan effective JAN 1.',
      'For members of MA/MAPD/PDP/Cost Plan that will be affected by contract non-renewal (PLEX - Plan Exit) or service area reduction (plan no longer available in zip or county) for the upcoming plan year.'
    ],
    timePeriod: [
      '12/8 - end of Februrary',
      ' The effective date would be the first day of the upcoming month following enrollment. '
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'OTH',
    name: 'Mutual Termination',
    description: [
      'Termination of contract with CMS (or mutual termination of contract with CMS)',
      'This SEP exists for members who will be affected by a termination of contractthat occurs mid-year.'
    ],
    timePeriod: [
      'SEP begins the month of   the termination effective date and ends two months after the effective date of the termination.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'SNP',
    name: 'Loss of Special Needs Status',
    description: [
      'CMS provides a SEP for individuals enrolled in a SNP who are no longer eligible for the SNP because they no longer meet the specific special needs status.'
    ],
    timePeriod: [
      'begins when the period of deemed continued eligibility startsand ends the earlier of when the beneficiary makes an enrollment request or within three calendar months after the expiration of the period of eligibility.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'CHR',
    name: 'Chronic Condition',
    description: [
      '1) This SEP is for those individuals with severe or disabling chronic conditions to enroll in a CC-SNP designed to serve individuals with those conditions',
      'Once the SEP ends, they may make enrollment changes only during AEP or other eligible election periods. ',
      '2) Individuals found ineligible for a CC-SNP',
      'After enrollment, Individuals who are found tonot have the qualifying condition necessary to enroll in the CC-SNP will have this SEP to enroll in a different plan.',
      '3) For individuals enrolled in CC-SNP to change to a different CC-SNP focusing on a different condition: For individuals enrolled in CC-SNP to change to a different CC-SNP focusing on a different condition'
    ],
    timePeriod: [
      '1) This SEP will apply as long as the individual has the qualifying condition and will end once they enroll in a CC-SNP',
      '2) This SEP begins when the plan notifies the individual of the lack of eligibility and continues for two additional calendar months.  The SEP ends when the individual makes an enrollment election or on the last day of the 2nd month following the notification.',
      '3) Eligibility for this SEP ends at the time the individual enrolls in the new CC-SNP.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'MDE',
    name: 'Dual Eligible',
    description: [
      'Individuals who have Medicare A and B and receive any type of Federal or State assistance from Medicaid or Low Income Subsidy (LIS) a.k.a. Extra Help (due to financial reasons), including Full Benefit Dual Eligible (FBDE), QMB, QMB+, SLMB, SLMB+, QI, the Medicare Savings Program, or are only eligible for LIS have a onetime-per-calendar-quarter SEP between January through September.'
    ],
    timePeriod: [
      'For use ONCE in each of the following calendar quarters:',
      'Jan-Mar',
      'Apr-Jun',
      'Jul-Sept'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'MCD',
    name: 'Change in Medicaid status',
    description: [
      'Individuals who Gain, Lose or Have a Change in their Medicaid (Dual Eligible)Status have a SEP ',
      'Become eligible for any type of assistance from the Title XIX program (including “partial duals” who receive cost sharing assistance under Medicaid)',
      'Lose eligibility for any type of assistance',
      'Have a change in the level of assistance they receive (e.g., stop receiving Medicaid benefits, but still qualify for LIS, those who have a change in cost sharing).'
    ],
    timePeriod: [
      'The SEP allows the individual one opportunity to make an election within three months of any of the changes noted above, or notification of such a change, whichever is later.',
      'The effective date for enrollments under this SEP is the first day of the month following receipt of the enrollment request'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'NLS',
    name: 'Change in LIS status',
    description: [
      'Become eligible for LIS (but who do not receive Medicaid benefits)',
      'Lose eligibility for any type of assistance',
      'Have a change in the level of assistance they receive',
      'Use of this SEP does NOT count towards the once per calendar quarter limitation. '
    ],
    timePeriod: [
      'One opportunity to make an election within three months of any of the changes noted above, or notification of such a change, whichever is later.',
      'The effective date for enrollments under this SEP is the first day of the month following receipt of the enrollment request.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'LAW',
    name: 'Non US Citizens that become lawfully present',
    description: [
      'CMS providesa SEPfor non-U.S. citizens who become lawfully present in the United States',
      'Applicants are NOT required to provide evidence of U.S. citizenship or lawful presence status with the enrollment request and plans are NOT permitted to request/require such information or documentation. '
    ],
    timePeriod: [
      'begins the month the lawful presence starts and continues for two (2) additional calendar months.'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: '5ST',
    name: 'Five Star Rating',
    description: [
      'A Medicare beneficiary may enroll in a MA/MAPD/PDP that has an overall Plan Rating of five (5) Stars.'
    ],
    timePeriod: [
      'Any date that is not between 12/1 - 12/7',
      'can only be used ONCE in a contract year'
    ],
    enrollMA: true,
    enrollMAPD: true,
    enrollPDP: true
  }
];

export default SEPs;
