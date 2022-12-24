using PhoneNumberChecker.Controllers;
using PhoneNumberChecker.Models;
using PhoneNumberChecker.Services;
using PhoneNumbers;

namespace PhoneNumberChecker.Tests;

public class PhoneServiceTest
{
    PhoneService phoneService = new PhoneService();

    [Fact]
    public void GetSupportedCountries()
    {
        var result = phoneService.GetSupportedCountries();

        Assert.IsType<List<SupportedCountries>>(result);
    }

    [Fact]
    public void IsNumberValid()
    {
        string wrongNumber = "04512721";
        int countryCode = 61;

        NumberValidationDTO result = phoneService.IsNumberValid(wrongNumber, countryCode);

        NumberValidationDTO expectedDTO = new NumberValidationDTO()
        {
            IsValid = false,
            IsPossible = true,
            NumberType = PhoneNumberType.UNKNOWN,
            IntlFormat = null,
            PhoneNumber = 0,
            Region = "AU"
        };

        Assert.IsType<NumberValidationDTO>(result).Equals(expectedDTO);


        string correctNumber = "0452876123";

        result = phoneService.IsNumberValid(correctNumber, countryCode);

        expectedDTO = new NumberValidationDTO()
        {
            IsValid = true,
            IsPossible = true,
            NumberType = PhoneNumberType.MOBILE,
            IntlFormat = "+61 452 876 123",
            PhoneNumber = 452876123,
            Region = "AU",
        };

        Assert.IsType<NumberValidationDTO>(result).Equals(expectedDTO);
    }
}