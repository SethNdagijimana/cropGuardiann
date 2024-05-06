-- CreateTable
CREATE TABLE "Insurance" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "insurance" "InsuranceType" NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Insurance_email_key" ON "Insurance"("email");

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
