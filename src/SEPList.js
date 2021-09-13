var SEPs = [
  {
    code: 'IEP',
    name: 'Initial Enrollment Period',
    description:
      'This enrollment period is for Part D coverage (MAPD or PDP),  not MA-only.  The total enrollment period is seven (7) months beginning three (3) months before the effective date of Medicare Part A and B, includes the month Medicare begins, and continues for three (3) additional months.  If enrollment is during the three (3) months   before the Medicare effective date, the plan effective date will be the first of the month that Medicare is effective; otherwise, the plan effective date will be the first of the month following plan enrollment. IEP is also used for an individual who has resided out of the country during the period of their original Medicare eligibility and is now moving back to the U.S./U.S. Territory, is getting Medicare A and B and wishes to enroll in a MAPD or PDP.',
    timePeriod:
      '3 months before part A and B effective Date, month of effective date and 3 months after effective date (3-1-3)',
    enrollMA: false,
    enrollMAPD: true,
    enrollPDP: true
  },
  {
    code: 'ICEP',
    name: 'Initial Coverage Enrollment Period',
    description: ''
  }
];

export default SEPs;
