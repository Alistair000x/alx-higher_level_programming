#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cyycle
 * @list: pointer
 * Return: 0 if false, 1 if true
 */
int check_cycle(listint_t *list)
{
    listint_t *c = list;
    listint_t *h = list;

    if (list == NULL || list->next == NULL)
        return 0;

    while (h != NULL && h->next != NULL)
    {
        c = c->next;
        h = h->next->next;

        if (c == h)
            return 1;
    }

    return 0;
}
