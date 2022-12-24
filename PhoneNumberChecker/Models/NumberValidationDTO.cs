using System;
using PhoneNumbers;

namespace PhoneNumberChecker.Models
{
    public partial class NumberValidationDTO
    {
        public ulong PhoneNumber { get; set; }
        public string? IntlFormat { get; set; }
        public bool IsValid { get; set; }
        public bool IsPossible { get; set; }
        public PhoneNumberType NumberType { get; set; }
        public string? Region { get; set; }


        // Format text based on run environment
        public string FormattedNumberType => Thread.CurrentThread.CurrentCulture.TextInfo.ToTitleCase(
                string
                .Join(" ", (Enum.GetName(NumberType)?.ToLower() ?? "")
                            .Split("_")
                    )
            );
    }
}

