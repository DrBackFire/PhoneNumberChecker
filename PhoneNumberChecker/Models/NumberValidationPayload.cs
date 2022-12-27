using System;
namespace PhoneNumberChecker.Models
{
    public partial class NumberValidationPayload
    {
        public int countryCode { get; set; }
        public ulong phoneNumber { get; set; }

        public string formattedNbr => phoneNumber.ToString();
    }
}

