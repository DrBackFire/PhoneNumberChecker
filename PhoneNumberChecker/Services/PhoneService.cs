using System;
using System.Globalization;
using PhoneNumberChecker.Models;
using PhoneNumbers;

namespace PhoneNumberChecker.Services
{
    public class PhoneService
    {
        private readonly List<SupportedCountries> supportedCountries = new List<SupportedCountries>();

        private readonly PhoneNumberUtil phoneUtil = PhoneNumberUtil.GetInstance();

        public PhoneService()
        {
            BuildSupportedCountriesList();
        }

        private int FindCountryCode(string countryShortCode)
        {
            return phoneUtil.GetCountryCodeForRegion(countryShortCode.ToUpper());
        }

        private string GetExampleNumberByRegion(string regionCode)
        {
            return phoneUtil
                    .GetExampleNumber(regionCode)
                    .NationalNumber
                    .ToString();
        }

        private PhoneNumberType GetNumberType(PhoneNumber phoneNumber)
        {
            return phoneUtil.GetNumberType(phoneNumber);
        }


        private string FindRegionByCountryCode(int countryCode)
        {
            return phoneUtil.GetRegionCodeForCountryCode(countryCode);
        }

        private bool IsNumberPossible(PhoneNumber phoneNumber)
        {
            return phoneUtil.IsPossibleNumber(phoneNumber);
        }

        private string GetCountryPlaceHolder(string regionCode)
        {
            string number = GetExampleNumberByRegion(regionCode);

            PhoneNumber phoneNumber = phoneUtil.Parse(number, regionCode);

            return phoneUtil.Format(phoneNumber, PhoneNumberFormat.NATIONAL);
        }

        private void BuildSupportedCountriesList()
        {
            phoneUtil
                .GetSupportedRegions()
                .ToList()
                .ForEach(regionCode =>
                {
                    // get country code 
                    int code = FindCountryCode(regionCode);

                    try
                    {
                        // to get country name
                        var CountryName = new RegionInfo(regionCode).EnglishName;

                        string region = FindRegionByCountryCode(code);

                        SupportedCountries sc = new SupportedCountries()
                        {
                            CountryCode = code,
                            CountryName = CountryName,
                            NumberPlaceHolder = GetCountryPlaceHolder(regionCode),
                            Region = regionCode
                        };

                        // avoid duplicates
                        if (!supportedCountries.Any(x => x.CountryCode == sc.CountryCode))
                        {
                            supportedCountries.Add(sc);
                        }
                    }
                    catch (ArgumentException e)
                    {
                        Console.WriteLine(e.ToString());
                    }
                });
        }


        public List<SupportedCountries> GetSupportedCountries()
        {
            if (supportedCountries.Count == 0)
            {
                BuildSupportedCountriesList();
            }

            return supportedCountries.OrderBy(x => x.CountryName).ToList();
        }

        public NumberValidationDTO IsNumberValid(string number, int countryCode)
        {
            string region = FindRegionByCountryCode(countryCode);

            PhoneNumber phoneNumber = phoneUtil.Parse(number, region);

            NumberValidationDTO dto = new NumberValidationDTO()
            {
                IsValid = phoneUtil.IsValidNumber(phoneNumber),
                IsPossible = IsNumberPossible(phoneNumber),
                NumberType = GetNumberType(phoneNumber),
                PhoneNumber = phoneNumber.NationalNumber,
                IntlFormat = phoneUtil.Format(phoneNumber, PhoneNumberFormat.INTERNATIONAL),
                Region = phoneUtil.GetRegionCodeForNumber(phoneNumber)
            };

            return dto;
        }

    }
}

