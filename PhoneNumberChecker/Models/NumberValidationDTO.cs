using System;
using System.Globalization;
using PhoneNumbers;

namespace PhoneNumberChecker.Models
{
    public partial class NumberValidationDTO
    {
        public Guid Id { get; set; }
        public ulong PhoneNumber { get; set; }
        public string? IntlFormat { get; set; }
        public bool IsValid { get; set; }
        public bool IsPossible { get; set; }
        public PhoneNumberType NumberType { get; set; }
        public string? Region { get; set; }

        // To be used by the frontend to set selected rows
        public bool IsSelected => false;

        // Format text based on run environment
        public string FormattedNumberType => Thread.CurrentThread.CurrentCulture.TextInfo.ToTitleCase(
                string
                .Join(" ", (Enum.GetName(NumberType)?.ToLower() ?? "")
                            .Split("_")
                    )
            );
    }
}

